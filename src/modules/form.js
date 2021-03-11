import { addProject } from "../modules/project.js";
import { createProjectForm, createTaskForm } from "../modules/renderModals.js";

let $projectModal;

//Invoked when form is submitted.
function submitForm(event) {
	event.preventDefault();

	switch (event.target.id) {
		//Case Project Form
		case "add-project-btn":
			$projectModal = bootstrap.Modal.getInstance(document.getElementById("create-project-modal"));
			let projectName = createProjectForm.querySelector("#project-name").value;

			let fields = [projectName];

			if (!validateForm(fields)) return false;

			addProject(projectName);

			createProjectForm.reset();
			$projectModal.hide();
			break;
		//Case Task Form
		case "add-task-btn":
			console.log(createTaskForm);
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
