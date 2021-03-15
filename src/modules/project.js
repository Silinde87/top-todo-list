import { generateID } from "../functions/tools.js";
import { $projects } from "../index.js";

// -- PROJECT OBJECT (Factory) --
export const Project = (name) => {
	let id = generateID();
	let projectName = name;
	let projectTasks = [];

	//getters
	const getProjectId = () => id;
	const getProjectName = () => projectName;
	const getProjectTasks = () => projectTasks;

	//setters
	const setProjectName = (param) => (projectName = param);

	const addTaskToProject = (task) => {
		projectTasks.push(task);
	};

	return { getProjectId, getProjectName, getProjectTasks, setProjectName, addTaskToProject };
};

function addProject(projectName) {
	$projects.push(Project(projectName));
}

//Removes project from $projects based on projectId
function removeProject(projectId) {
	$projects = $projects.filter((project) => project.getProjectId() !== projectId);
}

function getProjectNameByProjectId(projectId) {
	let newProjects = $projects.filter((project) => project.getProjectId() === projectId);	
	let name = newProjects[0].getProjectName();
	return name;
}

function getProjectById(projectId) {
	let project = $projects.filter((project) => project.getProjectId() === projectId)[0];	
	return project;
}

export { addProject, removeProject, getProjectNameByProjectId, getProjectById };
