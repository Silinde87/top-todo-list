import { generateID } from "../functions/tools.js";

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
