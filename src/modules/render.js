import css from "../styles/style.css";

import { $content, $projects } from "../index.js";
import { createHtmlElement } from "../functions/tools.js";

let navBarElem, lateralMenuBarElem, containerListElem;

function renderMain() {
	$content.appendChild(renderNavBar());
	$content.appendChild(renderLateralMenuBar());
	$content.appendChild(renderContainerList());
}

//Creates top nav bar and returns the DOM Element
function renderNavBar() {
	navBarElem = createHtmlElement("nav", "nav-bar", null, null);

	//Creates group of Icons.
	const leftGroupIconElem = createHtmlElement("div", "left-group-icon", ["nav-icon-group"], null);
	const rightGroupIconElem = createHtmlElement("div", "right-group-icon", ["nav-icon-group"], null);

	//Creates divs which contain every icon.
	const hamBarsIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	hamBarsIconElem.innerHTML = '<i class="bi bi-list"></i>';
	const homeIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	homeIconElem.innerHTML = '<i class="bi bi-house-door"></i>';
	const addIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	addIconElem.innerHTML = '<i class="bi bi-plus"></i>';
	const completedIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	completedIconElem.innerHTML = '<i class="bi bi-calendar-check"></i>';

	leftGroupIconElem.appendChild(hamBarsIconElem);
	leftGroupIconElem.appendChild(homeIconElem);
	rightGroupIconElem.appendChild(addIconElem);
	rightGroupIconElem.appendChild(completedIconElem);

	navBarElem.appendChild(leftGroupIconElem);
	navBarElem.appendChild(rightGroupIconElem);

	//event listeners of nav bar
	hamBarsIconElem.onclick = () => {
		lateralMenuBarElem.classList.toggle("active-lateral-bar");
		containerListElem.classList.toggle("toggle-container");
	};

	return navBarElem;
}

//Creates lateral Menu Bar and returns the DOM Element
function renderLateralMenuBar() {
	lateralMenuBarElem = createHtmlElement("div", "lateral-bar", ["user-select-none"], null);

	//Creates list's elements.
	const listMenuElem = createHtmlElement("ul", "list-menu", null, null);
	const inboxListElem = createHtmlElement("li", null, ["list-menu-elem"], null);
	const todayListElem = createHtmlElement("li", null, ["list-menu-elem"], null);
	const projectsListElem = createHtmlElement("div", "projects-list", ["list-menu-elem"], null);

	//Creates icons and text element for list's elements.
	const inboxIconElem = createHtmlElement("span", "inbox-icon", ["menu-icon"], null);
	inboxIconElem.innerHTML = '<i class="bi bi-inboxes"></i>';
	const inboxTextElem = createHtmlElement("span", null, ["menu-text"], "Inbox");
	const todayIconElem = createHtmlElement("span", "today-icon", ["menu-icon"], null);
	todayIconElem.innerHTML = '<i class="bi bi-calendar-day"></i>';
	const todayTextElem = createHtmlElement("span", null, ["menu-text"], "Today");
	const projectsIconElem = createHtmlElement("span", null, ["menu-icon"], null);
	projectsIconElem.innerHTML = '<i id="projects-icon" class="bi bi-chevron-down"></i>';
	const projectsTextElem = createHtmlElement("span", "projects-text", ["menu-text"], "Projects");
	const projectAddIconElem = createHtmlElement("span", "project-add", null, null);
	projectAddIconElem.innerHTML = '<i class="bi bi-plus-circle"></i>';

	//Accordion attributes from projectListElem
	projectsListElem.setAttribute("data-bs-toggle", "collapse");
	projectsListElem.setAttribute("data-bs-target", "#collapseOne");
	projectsListElem.setAttribute("aria-expanded", "false");
	projectsListElem.setAttribute("aria-controls", "collapseOne");

	//Creates accordionElement.
	const accordionElem = createHtmlElement("div", "accordion", ["accordion", "accordion-flush"], null);
	const accordionItem = createHtmlElement(
		"div",
		"collapseOne",
		["accordion-collapse", "collapse", "show"],
		null
	);
	accordionItem.setAttribute("data-bs-parent", "#accordion");
	accordionItem.appendChild(renderProjectList($projects));
	accordionElem.appendChild(accordionItem);

	inboxListElem.appendChild(inboxIconElem);
	inboxListElem.appendChild(inboxTextElem);
	todayListElem.appendChild(todayIconElem);
	todayListElem.appendChild(todayTextElem);
	projectsListElem.appendChild(projectsIconElem);
	projectsListElem.appendChild(projectsTextElem);
	projectsListElem.appendChild(projectAddIconElem);

	listMenuElem.appendChild(inboxListElem);
	listMenuElem.appendChild(todayListElem);
	listMenuElem.appendChild(projectsListElem);

	lateralMenuBarElem.appendChild(listMenuElem);
	lateralMenuBarElem.appendChild(accordionElem);

	//Events listeners of lateral bar
	projectsListElem.onclick = () => document.querySelector("#projects-icon").classList.toggle("rotate");
	projectsListElem.onmouseover = () => projectAddIconElem.classList.add("project-add-show");
	projectsListElem.onmouseout = () => projectAddIconElem.classList.remove("project-add-show");

	return lateralMenuBarElem;
}

//Assist function. Creates project list element and returns it.
function renderProjectList(projects) {
	const projectList = createHtmlElement("ul", "accordion-list", null, null);

	projects.forEach((project) => {
		const projectElem = createHtmlElement("li", null, ["accordion-list-elem"], null);
		const projectNameElem = createHtmlElement("span", null, null, project.getProjectName());
		const removeIconID = `remove ${project.getProjectName()}`;
		const removeIconElem = createHtmlElement("span", removeIconID, ["remove-icon"], null);
		removeIconElem.innerHTML = '<i class="bi bi-dash-circle"></i>';
		projectElem.appendChild(projectNameElem);
		projectElem.appendChild(removeIconElem);
		projectList.appendChild(projectElem);

		projectElem.onmouseover = () => removeIconElem.classList.add("remove-icon-show");		
		projectElem.onmouseout = () => removeIconElem.classList.remove("remove-icon-show");
	});

	return projectList;
}

function renderContainerList() {
	containerListElem = createHtmlElement("div", "container-list", null, null);
	const testElem = createHtmlElement("span", null, null, "THIS IS FOR TESTING PURPOSES")
	containerListElem.appendChild(testElem);

	return containerListElem;
}

export { renderMain };
