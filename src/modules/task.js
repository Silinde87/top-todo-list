import { generateID } from "../functions/tools.js";
import { $tasks } from "../index.js";

// -- TASK OBJECT (Factory) --
const Task = (title, description, scheduleDate, project, priority) => {
	let id = generateID();
	let titleTask = title;
	let descriptionTask = description;
	let scheduleDateTask = scheduleDate;
	let projectTask = project;
	let priorityTask = priority;
	let completed = false;

	//getters
	const getId = () => id;
	const getTitle = () => titleTask;
	const getDescription = () => descriptionTask;
	const getScheduleDate = () => scheduleDateTask;
	const getProjectFromTask = () => projectTask;
	const getPriorityFromTask = () => priorityTask;
	const isCompleted = () => completed;

	//setters
	const setTitle = (param) => (titleTask = param);
	const setDescription = (param) => (descriptionTask = param);
	const setScheduleDate = (param) => (scheduleDateTask = param);
	const setProjectFromTask = (param) => (projectTask = param);
	const setPriorityFromTask = (param) => (priorityTask = param);
	const setCompleted = () => (completed = !completed);

	return {
		getId,
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
		isCompleted,
		setCompleted,
	};
};

function addTask(title, description, scheduleDate, project, priority) {
	$tasks.push(Task(title, description, new Date(scheduleDate).toDateString(), project, priority));
}

function filterTaskByProjectId(taskList, projectId) {
	taskList = filterTaskByNotCompleted(taskList);
	if (projectId) {
		let list = taskList.filter((task) => task.getProjectFromTask() !== undefined);
		return list.filter((task) => task.getProjectFromTask().getProjectId() == projectId);
	} else {
		return taskList;
	}
}

function filterTaskByCompleted(taskList) {
	return taskList.filter((task) => task.isCompleted());
}

function filterTaskByNotCompleted(taskList){	
	return taskList.filter((task) => !task.isCompleted())
}

//@param date: new Date().toDateString()
function filterTaskByDate(taskList, date) {
	taskList = filterTaskByNotCompleted(taskList);
	if (date) {
		return taskList.filter((task) => task.getScheduleDate() === date);
	} else {
		return taskList.filter((task) => task.getScheduleDate() === "");
	}
}

function removeTask(taskId) {
	$tasks = $tasks.filter((task) => task.getId() !== taskId);
}

function completeTask(taskId) {
	$tasks.find(task => task.getId() == taskId).setCompleted();	
}


export { Task, addTask, filterTaskByProjectId, filterTaskByCompleted, filterTaskByDate, completeTask, removeTask };
