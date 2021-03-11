import css from "./styles/root.css";
import { createProjectModal } from "./modules/renderModals.js";
import { createTaskModal, renderProjectListAtTaskModal } from "./modules/renderModals.js";
import { Project } from "./modules/project.js";
import { renderNavBar } from "./modules/renderNavBar.js";
import { renderLateralMenuBar, renderProjectList } from "./modules/renderLateralMenuBar.js";
import { renderContainerList } from "./modules/renderContainerList.js";
import { submitForm, cleanForm } from "./modules/form.js";

const $content = document.querySelector("#content");
let $projects = [];
let $tasks = [];
let e;

//Creating Projects for testing
$projects.push(Project("Project One"));
$projects.push(Project("Project Two"));
$projects.push(Project("Project Three"));
$projects.push(Project("Project Four"));

//Invoking all renders.
$content.appendChild(renderNavBar());
$content.appendChild(renderLateralMenuBar());
$content.appendChild(renderContainerList(e));
$content.appendChild(createProjectModal());
$content.appendChild(createTaskModal());

//NAV BAR event listeners.
document.querySelector("#ham-btn").onclick = () => {
	document.querySelector("#lateral-bar").classList.toggle("active-lateral-bar");
	document.querySelector("#container-list").classList.toggle("toggle-container");
};
document.querySelector("#home-btn").onclick = (e) => {
	let containerListElem = $content.querySelector("#container-list");
	containerListElem.replaceWith(renderContainerList(e));
}

//FORMS event listeners
//Adds new project and refresh the project list from lateral menu bar.
document.querySelector("#add-project-btn").onclick = (e) => {
	submitForm(e);
	document.querySelector("#collapseOne").innerHTML = "";
	document.querySelector("#collapseOne").appendChild(renderProjectList($projects));
	renderProjectListAtTaskModal(document.querySelector("#task-project"));
};
//Adds NEW TASK.
document.querySelector("#add-task-btn").onclick = (e) => {
	submitForm(e);
};

//Cleans modals when cancel button is pressed.
document.querySelector("#create-project-modal").addEventListener("hidden.bs.modal", (e) => cleanForm(e));
document.querySelector("#create-task-modal").addEventListener("hidden.bs.modal", (e) => cleanForm(e));

export { $projects, $tasks };
