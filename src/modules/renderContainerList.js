import { createHtmlElement } from "../functions/tools.js";

let containerListElem, headerListElem, bodyListElem;

//TODO RENDER CONTAINER LIST

function renderContainerList(event) {
	containerListElem = createHtmlElement("div", "container-list", null, null);
	headerListElem = createHtmlElement("nav", "header-list", null, null);
	bodyListElem = createHtmlElement("div", "body-list", null, null);

	//Header
	const titleHeaderElem = createHtmlElement("p", "title-header-list", null, null);
	//First time render or home button
	if (!event || (event && event.target.id === "home-btn")) {
		titleHeaderElem.innerText = "Inbox";
		//When lateral button is pressed
	} else if (event !== undefined) {
		console.log(event.target.innerText);
		titleHeaderElem.innerText = event.target.innerText;
		containerListElem.classList.add("toggle-container");
	}
	headerListElem.appendChild(titleHeaderElem);

	//Body	

	containerListElem.appendChild(headerListElem);
	containerListElem.appendChild(bodyListElem);

	return containerListElem;
}

//Test purposes
function showTasks(tasksList) {
	console.log(tasksList);
	bodyListElem.innerHTML = "";
	tasksList.forEach((task) => {
		const rowTask = createHtmlElement("tr", null, ["task-row"], null);
		rowTask.dataset.id = task.getId();
		const circleColumnTask = createHtmlElement("td", null, null, null);
		const circleTask = createHtmlElement("div", null, ["circle-task"], null);
		circleColumnTask.appendChild(circleTask);
		const titleColumTask = createHtmlElement("td", null, null, task.getTitle());
		const editColumTask = createHtmlElement("div", null, ["task-icon"], null);
		editColumTask.innerHTML = '<i class="bi bi-pen"></i>';

		rowTask.appendChild(circleColumnTask);
		rowTask.appendChild(titleColumTask);
		rowTask.appendChild(editColumTask);

		bodyListElem.appendChild(rowTask);
	});
}

export { renderContainerList, showTasks };
