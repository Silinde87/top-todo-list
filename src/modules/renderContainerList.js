import { createHtmlElement } from "../functions/tools.js";
import { $tasks } from "../index.js";
import { getProjectNameByProjectId } from "./project.js";
import {
	filterTaskByCompleted,
	filterTaskByDate,
	filterTaskByProjectId,
	completeTask,
	removeTask,
} from "./task.js";

let containerListElem, headerListElem, bodyListElem;

//TODO RENDER CONTAINER LIST
function renderContainerList(event) {
	containerListElem = createHtmlElement("div", "container-list", null, null);
	headerListElem = createHtmlElement("nav", "header-list", null, null);
	bodyListElem = createHtmlElement("table", "body-list", null, null);

	//Rendering
	const titleHeaderElem = createHtmlElement("p", "title-header-list", null, null);
	//First time render or home button
	if (!event || (event && event.target.id === "home-btn")) {
		titleHeaderElem.innerText = "Inbox";
		showTasks(filterTaskByDate($tasks, null));

		//Completed button is pressed
	} else if (event.target.id === "completed-btn") {
		titleHeaderElem.innerText = "Completed Tasks";
		showTasks(filterTaskByCompleted($tasks));

		//Project from project list is pressed
	} else if (event.target.classList.contains("project-name") || event.target.id === "add-task-btn") {		
		let projectId = event.target.dataset.id;		
		if(projectId.includes("project")){			
			titleHeaderElem.innerText = "Inbox";
			showTasks(filterTaskByDate($tasks, null));
		} else {
			titleHeaderElem.innerText = getProjectNameByProjectId(projectId);
			showTasks(filterTaskByProjectId($tasks, projectId));
		}
	} else if (event.target.classList.contains("today")) {
		titleHeaderElem.innerText = "Tasks for today";
		//TODO GET CURRENT DATE AND PARSE IT
		let date = new Date(Date.now()).toDateString();
		showTasks(filterTaskByDate($tasks, date));

		//Show Lateral button is pressed (today and inbox)
	} else if (event.target.classList.contains("inbox") || event.target.classList.contains("bi-dash-circle")) {
		titleHeaderElem.innerText = "Inbox";
		showTasks(filterTaskByDate($tasks, null));
	}

	if (document.querySelector("#lateral-bar").classList.contains("active-lateral-bar")) {
		containerListElem.classList.add("toggle-container");
	}

	headerListElem.appendChild(titleHeaderElem);
	containerListElem.appendChild(headerListElem);
	containerListElem.appendChild(bodyListElem);

	return containerListElem;
}

//When called Prints on bodyListElement the taskList pased as parameter.
function showTasks(taskList) {
	bodyListElem.innerHTML = "";
	taskList.forEach((task) => {
		const rowTask = createHtmlElement("tr", null, ["task-row"], null);
		rowTask.dataset.id = task.getId();
		const circleColumnTask = createHtmlElement("td", null, ["task-cell"], null);
		const circleTask = createHtmlElement("div", null, ["circle-task"], null);
		circleTask.dataset.id = task.getId();
		circleColumnTask.appendChild(circleTask);
		const titleColumnTask = createHtmlElement("td", null, ["task-title"], task.getTitle());
		const editColumnTask = createHtmlElement("td", null, ["task-cell"], null);
		editColumnTask.innerHTML = '<i class="bi bi-pen task-icon"></i>';
		const dateColumnTask = createHtmlElement("td", null, ["task-cell"], null);
		dateColumnTask.innerHTML = '<i class="bi bi-calendar-plus task-icon"></i>';
		const deleteColumnTask = createHtmlElement("td", null, ["task-cell"], null);
		deleteColumnTask.innerHTML = `<i class="bi bi-trash task-icon" data-id="${task.getId()}"></i>`;

		rowTask.appendChild(circleColumnTask);
		rowTask.appendChild(titleColumnTask);
		rowTask.appendChild(editColumnTask);
		rowTask.appendChild(dateColumnTask);
		rowTask.appendChild(deleteColumnTask);

		//Event listeners from each button task
		//Complete a task
		circleTask.onclick = (e) => {
			completeTask(e.target.dataset.id);
			e.target.parentNode.parentNode.remove();
		};
		//Remove a task
		deleteColumnTask.onclick = (e) => {
			removeTask(e.target.dataset.id);
			e.target.parentNode.parentNode.remove();
		};

		bodyListElem.appendChild(rowTask);
	});
}

export { renderContainerList, showTasks };
