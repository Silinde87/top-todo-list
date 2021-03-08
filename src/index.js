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

export { $content, $projects };
