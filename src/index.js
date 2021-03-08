import css from "./styles/root.css";
import { renderMain } from "./modules/render.js";
import { Project } from "./modules/project.js";

const $content = document.querySelector("#content");
let $projects = [];

//Creating Projects for testing
$projects.push(Project("Project One"));
$projects.push(Project("Project Two"));
$projects.push(Project("Project Three"));
$projects.push(Project("Project Four"));

renderMain();

//Adds rotate class to arrow when project Button is pressed
document.querySelector("#projects-list").addEventListener("click", () => {
    document.querySelector("#projects-icon").classList.toggle("rotate");
});
//Show and hide add button at project list menu lateral bar.
document.querySelector("#projects-list").addEventListener("mouseover", () => {    
    document.querySelector("#project-add").classList.add("project-add-show");
});
document.querySelector("#projects-list").addEventListener("mouseout", () => {    
    document.querySelector("#project-add").classList.remove("project-add-show");
});

export { $content, $projects };
