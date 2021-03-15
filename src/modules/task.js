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

//Add new Task object to tasks array. If no date, adds an empty string as a date.
function addTask(title, description, scheduleDate, project, priority) {
	let newTask;
	if (scheduleDate === "") {
		newTask = Task(title, description, "", project, priority);
	} else {
		newTask = Task(title, description, new Date(scheduleDate).toDateString(), project, priority);
	}
	$tasks.push(newTask);
}

function editTask(taskId, fields) {
	let index = $tasks.indexOf(getTaskById(taskId));
	let editedTask;
	if (fields[2] === "") {
		editedTask = Task(fields[0], fields[1], fields[2], fields[3], fields[4]);
	} else {
		editedTask = Task(fields[0], fields[1], new Date(fields[2]).toDateString(), fields[3], fields[4]);
	}
	$tasks.splice(index, 1, editedTask);
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

//Returns a new array with every completed task
function filterTaskByCompleted(taskList) {
	return taskList.filter((task) => task.isCompleted());
}

//Returns a new array with every not completed task
function filterTaskByNotCompleted(taskList) {
	return taskList.filter((task) => !task.isCompleted());
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

//Returns a task from tasks list based on taskId
function getTaskById(taskId) {
	return $tasks.filter((task) => task.getId() === taskId)[0];
}

function removeTask(taskId) {
	$tasks = $tasks.filter((task) => task.getId() !== taskId);
}

//Removes all tasks from a single project, based on projectId parameter
function removeAllTasksFromProject(projectId) {
	$tasks = $tasks.filter((task) => task.getProjectFromTask().getProjectId() !== projectId);
}

//Swaps isCompleted property from task pased as parameter.
function completeTask(taskId) {
	$tasks.find((task) => task.getId() == taskId).setCompleted();
}

export {
	Task,
	addTask,
	editTask,
	filterTaskByProjectId,
	filterTaskByCompleted,
	filterTaskByDate,
	completeTask,
	removeTask,
	removeAllTasksFromProject,
	getTaskById,
};
