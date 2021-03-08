import css from "../styles/style.css";

import { $content, $projects } from "../index.js";
import { createHtmlElement } from "../functions/tools.js";

let navBarElem, lateralMenuBarElem;

function renderMain() {
	$content.appendChild(renderNavBar());
	$content.appendChild(renderLateralMenuBar());
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

	hamBarsIconElem.onclick = () => lateralMenuBarElem.classList.toggle("lateral-bar-active");

	return navBarElem;
}

//Creates lateral Menu Bar and returns the DOM Element
function renderLateralMenuBar() {
	lateralMenuBarElem = createHtmlElement("div", "lateral-bar", null, null);

	//Creates list's elements.
	const listMenuElem = createHtmlElement("ul", "list-menu", null, null);
	const inboxListElem = createHtmlElement("li", null, ["list-menu-elem"], null);
	const todayListElem = createHtmlElement("li", null, ["list-menu-elem"], null);
	const projectsListElem = createHtmlElement("li", null, ["list-menu-elem"], null);

	//Creates icons and text element for list's elements.
	const inboxIconElem = createHtmlElement("span", null, ["menu-icon"], null);
	inboxIconElem.innerHTML = '<i class="bi bi-inboxes"></i>';
	const inboxTextElem = createHtmlElement("span", null, ["menu-text"], "Inbox");
	const todayIconElem = createHtmlElement("span", null, ["menu-icon"], null);
	todayIconElem.innerHTML = '<i class="bi bi-calendar-day"></i>';
	const todayTextElem = createHtmlElement("span", null, ["menu-text"], "Today");
	const projectsIconElem = createHtmlElement("span", null, ["menu-icon"], null);
	projectsIconElem.innerHTML = '<i class="bi bi-calendar3"></i>';
	const projectsTextElem = createHtmlElement("span", null, ["menu-text"], "Projects");

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

	listMenuElem.appendChild(inboxListElem);
	listMenuElem.appendChild(todayListElem);
	listMenuElem.appendChild(projectsListElem);

	lateralMenuBarElem.appendChild(listMenuElem);
	lateralMenuBarElem.appendChild(accordionElem);

	return lateralMenuBarElem;
}

//Assist function. Creates project list element and returns it.
function renderProjectList(projects) {
	const projectList = createHtmlElement("ul", null, null, null);
	projects.forEach((project) => {
		const projectElem = createHtmlElement("li", null, null, project.getProjectName());
		projectList.appendChild(projectElem);
	});

	return projectList;
}

export { renderMain };
