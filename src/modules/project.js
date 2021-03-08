// -- PROJECT OBJECT (Factory) --
export const Project = (name) => {
	let projectName = name;
	let projectTasks = [];

	//getters
	const getProjectName = () => projectName;
	const getProjectTasks = () => projectTasks;

	//setters
	const setProjectName = (param) => (projectName = param);

	const addTaskToProject = (task) => {
		projectTasks.push(task);
	};

	return { getProjectName, getProjectTasks, setProjectName, addTaskToProject };
};
