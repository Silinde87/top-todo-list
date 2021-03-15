import { createHtmlElement } from "../functions/tools.js";
import { $projects } from "../index.js";

let createProjectForm, createTaskForm;

//Generates the CREATE PROJECT Modal and returns it as DOM Element
function createProjectModal() {
	let createProjectModalElem = createModalElement("create-project-modal");

	const modalHeader = createProjectModalElem.querySelector(".modal-header");
	const modalBody = createProjectModalElem.querySelector(".modal-body");
	const modalFooter = createProjectModalElem.querySelector(".modal-footer");

	//HEADER
	const modalTitle = createHtmlElement("h5", null, ["modal-title"], "Add project");
	modalHeader.appendChild(modalTitle);

	//BODY
	createProjectForm = createHtmlElement("form", "create-project-form", null, null);
	createProjectForm.setAttribute("method", "GET");

	const formGroupProjectName = createHtmlElement("div", null, ["mb-3"], null);
	const labelProjectName = createHtmlElement("label", null, ["form-label"], "Project Name");
	labelProjectName.setAttribute("for", "project-name");
	const inputProjectName = createHtmlElement("input", "project-name", ["form-control"], null);
	inputProjectName.setAttribute("type", "text");	

	formGroupProjectName.appendChild(labelProjectName);
	formGroupProjectName.appendChild(inputProjectName);
	createProjectForm.appendChild(formGroupProjectName);

	modalBody.appendChild(createProjectForm);

	//FOOTER
	const addButton = modalFooter.querySelector(".btn-primary");
	addButton.setAttribute("id", "add-project-btn");
	addButton.setAttribute("form", "create-project-form");

	return createProjectModalElem;
}

//Generates the CREATE TASK Modal and returns it as DOM Element
function createTaskModal() {
	let createTaskModalElem = createModalElement("create-task-modal");

	const modalHeader = createTaskModalElem.querySelector(".modal-header");
	const modalBody = createTaskModalElem.querySelector(".modal-body");
	const modalFooter = createTaskModalElem.querySelector(".modal-footer");

	//HEADER
	const modalTitle = createHtmlElement("h5", null, ["modal-title"], "Add task");
	modalHeader.appendChild(modalTitle);

	//BODY
	createTaskForm = createHtmlElement("form", "create-task-form", null, null);
	createTaskForm.setAttribute("method", "GET");

	//Form Task Title
	const formGroupTaskTitle = createHtmlElement("div", null, ["mb-3"], null);
	const labelTaskTitle = createHtmlElement("label", null, ["form-label"], "Title");
	labelTaskTitle.setAttribute("for", "task-title");
	const inputTaskTitle = createHtmlElement("input", "task-title", ["form-control"], null);
	inputTaskTitle.setAttribute("type", "text");	
	formGroupTaskTitle.appendChild(labelTaskTitle);
	formGroupTaskTitle.appendChild(inputTaskTitle);

	//Form Task Description
	const formGroupTaskDescription = createHtmlElement("div", null, ["mb-3"], null);
	const labelTaskDescription = createHtmlElement("label", null, ["form-label"], "Description");
	labelTaskDescription.setAttribute("for", "task-title");
	const inputTaskDescription = createHtmlElement("textarea", "task-description", ["form-control"], null);
	inputTaskDescription.setAttribute("rows", "3");	
	formGroupTaskDescription.appendChild(labelTaskDescription);
	formGroupTaskDescription.appendChild(inputTaskDescription);

	//Form Task Schedule Date
	const formGroupTaskDate = createHtmlElement("div", null, ["mb-3"], null);
	const labelTaskDate = createHtmlElement("label", null, ["form-label"], "Schedule date");
	labelTaskDate.setAttribute("for", "task-date");
	const inputTaskDate = createHtmlElement("input", "task-date", ["form-control"], null);
	inputTaskDate.setAttribute("type", "date");
	formGroupTaskDate.appendChild(labelTaskDate);
	formGroupTaskDate.appendChild(inputTaskDate);

	//Form Task Priority
	const formGroupTaskPriority = createHtmlElement("div", null, ["mb-3"], null);
	const labelTaskPriority = createHtmlElement("label", null, ["form-label"], "Priority");
	labelTaskPriority.setAttribute("for", "task-priority");
	const inputTaskPriority = createHtmlElement("select", "task-priority", ["form-control"], null);
	inputTaskPriority.innerHTML = `
    <option value="none" disabled selected> -- Select priority -- </option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>`;
	formGroupTaskPriority.appendChild(labelTaskPriority);
	formGroupTaskPriority.appendChild(inputTaskPriority);

	//Form Task Project
	const formGroupTaskProject = createHtmlElement("div", null, ["mb-3"], null);
	const labelTaskProject = createHtmlElement("label", null, ["form-label"], "Project");
	labelTaskProject.setAttribute("for", "task-project");
	const inputTaskProject = createHtmlElement("select", "task-project", ["form-control"], null);	
	
	renderProjectListAtTaskModal(inputTaskProject);
	
	formGroupTaskProject.appendChild(labelTaskProject);
	formGroupTaskProject.appendChild(inputTaskProject);

	createTaskForm.appendChild(formGroupTaskTitle);
	createTaskForm.appendChild(formGroupTaskDescription);
	createTaskForm.appendChild(formGroupTaskDate);
	createTaskForm.appendChild(formGroupTaskPriority);
	createTaskForm.appendChild(formGroupTaskProject);

	modalBody.appendChild(createTaskForm);

	//FOOTER
	const addButton = modalFooter.querySelector(".btn-primary");
	addButton.setAttribute("id", "add-task-btn");
	addButton.setAttribute("form", "create-task-form");

	return createTaskModalElem;
}

//Assist function, creates an empty modal centered align.
function createModalElement(id) {
	const modalElem = createHtmlElement("div", id, ["modal", "fade"], null);
	modalElem.setAttribute("tabindex", "1");
	modalElem.setAttribute("role", "dialog");
	modalElem.setAttribute("aria-labelledby", id + "Label");
	modalElem.setAttribute("aria-hidden", "true");

	const divDoc = createHtmlElement("div", null, ["modal-dialog", "modal-dialog-centered"], null);
	const divContent = createHtmlElement("div", null, ["modal-content"], null);

	const divHeader = createHtmlElement("div", null, ["modal-header"], null);
	const divBody = createHtmlElement("div", null, ["modal-body"], null);
	const divFooter = createHtmlElement("div", null, ["modal-footer"], null);

	const addButton = createHtmlElement("button", null, ["btn", "btn-primary"], "Add");
	addButton.setAttribute("type", "submit");
	const closeButton = createHtmlElement("button", null, ["btn", "btn-secondary"], "Close");
	closeButton.setAttribute("type", "button");
	closeButton.setAttribute("data-bs-dismiss", "modal");
	divFooter.appendChild(closeButton);
	divFooter.appendChild(addButton);

	divContent.appendChild(divHeader);
	divContent.appendChild(divBody);
	divContent.appendChild(divFooter);

	divDoc.appendChild(divContent);
	modalElem.appendChild(divDoc);

	return modalElem;
}

//Renders the project list at task modal
function renderProjectListAtTaskModal(inputTaskProjectElem){		
	inputTaskProjectElem.innerHTML = `<option value="none" disabled selected> -- Select project -- </option>`;	
	$projects.forEach((project) => {		
		//Get every project from projects.		
		const projectOption = createHtmlElement("option", null, null, project.getProjectName());
		projectOption.setAttribute("value", project.getProjectId());
		inputTaskProjectElem.appendChild(projectOption);
	});
}

export { createProjectModal, createTaskModal, renderProjectListAtTaskModal, createProjectForm, createTaskForm,  };
