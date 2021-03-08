// -- TASK OBJECT (Factory) --
const Task = (title, description, scheduleDate, project, priority) => {
	let titleTask = title;
	let descriptionTask = description;
	let scheduleDateTask = scheduleDate;
	let projectTask = project;
	let priorityTask = priority;

	//getters
	const getTitle = () => titleTask;
	const getDescription = () => descriptionTask;
	const getScheduleDate = () => scheduleDateTask;
	const getProjectFromTask = () => projectTask;
	const getPriorityFromTask = () => priorityTask;

	//setters
	const setTitle = (param) => (titleTask = param);
	const setDescription = (param) => (descriptionTask = param);
	const setScheduleDate = (param) => (scheduleDateTask = param);
	const setProjectFromTask = (param) => (projectTask = param);
	const setPriorityFromTask = (param) => (priorityTask = param);

	return {
		getTitle,
		getDescription,
		getScheduleDate,
		getProjectFromTask,
		getPriorityFromTask,
		setTitle,
		setDescription,
		setScheduleDate,
		setProjectFromTask,
		setPriorityFromTask,
	};
};
