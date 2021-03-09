import css from "./styles/root.css";
import { Project } from "./modules/project.js";
import { renderNavBar } from "./modules/renderNavBar.js";
import { renderLateralMenuBar } from "./modules/renderLateralMenuBar.js";
import { renderContainerList } from "./modules/renderContainerList.js";
import { createProjectModal } from "./modules/renderModals.js";
import { createTaskModal } from "./modules/renderModals.js";

const $content = document.querySelector("#content");
let $projects = [];

//Creating Projects for testing
$projects.push(Project("Project One"));
$projects.push(Project("Project Two"));
$projects.push(Project("Project Three"));
$projects.push(Project("Project Four"));

$content.appendChild(renderNavBar());
$content.appendChild(renderLateralMenuBar());
$content.appendChild(renderContainerList());
$content.appendChild(createProjectModal());
$content.appendChild(createTaskModal());

//event listeners of nav bar.
document.querySelector("#ham-btn").onclick = () => {
	document.querySelector("#lateral-bar").classList.toggle("active-lateral-bar");
	document.querySelector("#container-list").classList.toggle("toggle-container");
};

export { $content, $projects };
