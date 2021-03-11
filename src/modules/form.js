import { addProject } from "../modules/project.js";
import { addTask } from "../modules/task.js";
import { createProjectForm, createTaskForm } from "../modules/renderModals.js";
import { renderList } from "./renderContainerList.js";

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
			let taskPriority = createTaskForm.querySelector("#task-priority").value;
			let taskProject = createTaskForm.querySelector("#task-project").value;

			fields = [taskTitle, taskDescription, taskDate, taskPriority, taskProject];

			//if (!validateForm(fields)) return false;

			addTask(taskTitle, taskDescription, taskDate, taskPriority, taskProject);
            
            document.querySelector("#container-list").appendChild(renderList());

			createTaskForm.reset();
			$taskModal.hide();
			break;
	}
}

//todo - Fill the form when edit button is clicked
function fillForm() {}

//todo - Validates all fields from form when submit
function validateForm(fieldsForm) {
	let flag = true;

	fieldsForm.forEach((field) => {
		if (field === "") flag = false;
	});

	return flag;
}

//Invoked when Cancel button from form is pressed.
function cleanForm(event) {
	event.target.querySelector("form").reset();
}

export { submitForm, cleanForm };
