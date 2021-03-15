import { addProject, getProjectById } from "../modules/project.js";
import { addTask,editTask, getTaskById } from "../modules/task.js";
import { createProjectForm, createTaskForm } from "../modules/renderModals.js";

let $projectModal, $taskModal;

//Invoked when form is submitted.
function submitForm(event) {
	event.preventDefault();
	let fields = [];

	switch (event.target.id) {
		//Case Project Form
		case "add-project-btn":
			$projectModal = bootstrap.Modal.getInstance(document.getElementById("create-project-modal"));
			let projectName = createProjectForm.querySelector("#project-name").value;

			fields = [projectName];

			if (!validateForm(fields)) return false;

			addProject(projectName);

			createProjectForm.reset();
			$projectModal.hide();
			break;
		//Case Task Form
		case "add-task-btn":
			$taskModal = bootstrap.Modal.getInstance(document.getElementById("create-task-modal"));
			let taskTitle = createTaskForm.querySelector("#task-title").value;
			let taskDescription = createTaskForm.querySelector("#task-description").value;
			let taskDate = createTaskForm.querySelector("#task-date").value;
			if (taskDate !== "")
				taskDate = new Date(createTaskForm.querySelector("#task-date").value).toDateString();
			let taskPriority = createTaskForm.querySelector("#task-priority").value;
			let projectId = createTaskForm.querySelector("#task-project").value;
			let taskProject = getProjectById(projectId);

			fields = [taskTitle, taskDescription, taskDate, taskProject, taskPriority];
			//TODO FORM TASK VALIDATION
			//if (!validateForm(fields)) return false;

			console.log();
			if(document.querySelector("#add-task-btn").innerText === "Add"){
				addTask(taskTitle, taskDescription, taskDate, taskProject, taskPriority);
			}else{						
				editTask(event.target.dataset.id, fields);
			}


			document.querySelector("#add-task-btn").dataset.id = projectId;
			
			$taskModal.hide();
			//Reset taskFormModal
			document.querySelector("#create-task-modal").querySelector(".modal-title").innerText = "Add Task";
			document.querySelector("#add-task-btn").innerText = "Add";
			//document.querySelector("#add-task-btn").removeAttribute("data-id");
			createTaskForm.reset();
			break;
	}
}

//TODO - Fill the form when edit button is clicked
function fillForm(e) {
	let task = getTaskById(e.target.dataset.id);
	document.querySelector("#task-title").value = task.getTitle();
	document.querySelector("#task-description").value = task.getDescription();

	if (task.getScheduleDate() === "") {
		document.querySelector("#task-date").value = "";
	} else {
		document.querySelector("#task-date").value = new Date(task.getScheduleDate())
			.toISOString()
			.substr(0, 10);
	}

	if (task.getPriorityFromTask() === "") document.querySelector("#task-priority").value = "none";
	else document.querySelector("#task-priority").value = task.getPriorityFromTask();
	
	if (task.getProjectFromTask() === undefined) document.querySelector("#task-project").value = "none";
	else document.querySelector("#task-project").value = task.getProjectFromTask().getProjectId();
}

//TODO - Validates all fields from form when submit
function validateForm(fieldsForm) {	
	let flag = true;

	fieldsForm.forEach((field) => {
		//if (field === "") flag = false;
	});

	return flag;
}

//Invoked when Cancel button from form is pressed.
function cleanForm(event) {
	event.target.querySelector("form").reset();
}

export { submitForm, cleanForm, fillForm };
