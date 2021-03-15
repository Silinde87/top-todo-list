import css from "./styles/root.css";
import { createProjectModal, createTaskModal, renderProjectListAtTaskModal } from "./modules/renderModals.js";
import { Project } from "./modules/project.js";
import { renderNavBar } from "./modules/renderNavBar.js";
import { renderLateralMenuBar, renderProjectList } from "./modules/renderLateralMenuBar.js";
import { renderContainerList, showTasks } from "./modules/renderContainerList.js";
import { submitForm, cleanForm } from "./modules/form.js";
import { Task } from "./modules/task";

const $content = document.querySelector("#content");
let $projects = [];
let $tasks = [];
let e;

//Creating Projects and Tasks for testing
const project1 = Project("Project One");
const project2 = Project("Project Two");
const project3 = Project("Project Three");
const project4 = Project("Project Four");
$projects.push(project1);
$projects.push(project2);
$projects.push(project3);
$projects.push(project4);
$tasks.push(Task("Title 1", "Description 1", new Date(Date.now()).toDateString(), project1, "Low"));
$tasks.push(Task("Title 2", "Description 2", new Date("2021-05-05"), project1, "Medium"));
$tasks.push(Task("Title 3", "Description 3", "", project3, "High"));
$tasks.push(Task("Title 4", "Description 4", new Date("2017-05-05"), project4, "Low"));
$tasks.push(Task("Title 5", "Description 4", "", project4, ""));

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
	document.querySelector("#lateral-bar").classList.remove("active-lateral-bar");
	containerListElem.replaceWith(renderContainerList(e));
};
document.querySelector("#completed-btn").onclick = (e) => {
	let containerListElem = $content.querySelector("#container-list");
	containerListElem.replaceWith(renderContainerList(e));
};

//LATERAL BAR event listeners
document.querySelector("#inbox-btn").onclick = (e) => {
	let containerListElem = $content.querySelector("#container-list");
	containerListElem.replaceWith(renderContainerList(e));
};
document.querySelector("#today-btn").onclick = (e) => {
	let containerListElem = $content.querySelector("#container-list");
	containerListElem.replaceWith(renderContainerList(e));
};

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
	let containerListElem = $content.querySelector("#container-list");
	containerListElem.replaceWith(renderContainerList(e));
};

//Cleans modals when cancel button is pressed.
document.querySelector("#create-project-modal").addEventListener("hidden.bs.modal", (e) => cleanForm(e));
document.querySelector("#create-task-modal").addEventListener("hidden.bs.modal", (e) => cleanForm(e));

export { $projects, $tasks, $content };
