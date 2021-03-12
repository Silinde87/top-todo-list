import css from "../styles/style.css";
import { $projects } from "../index.js";
import { createHtmlElement } from "../functions/tools.js";
import { removeProject } from "./project";
import { renderProjectListAtTaskModal } from "../modules/renderModals";
import { renderContainerList } from "../modules/renderContainerList";

let lateralMenuBarElem;
let $removeIcons = [];

//Creates LATERAL MENU BAR and returns it as DOM Element.
function renderLateralMenuBar() {
	lateralMenuBarElem = createHtmlElement("div", "lateral-bar", ["user-select-none"], null);

	//Creates list's elements.
	const listMenuElem = createHtmlElement("ul", "list-menu", null, null);
	const inboxListElem = createHtmlElement("li", "inbox-btn", ["list-menu-elem", "inbox"], null);
	const todayListElem = createHtmlElement("li", "today-btn", ["list-menu-elem", "today"], null);
	const projectsListElem = createHtmlElement("div", "projects-list", ["list-menu-elem"], null);

	//Creates icons and text element for list's elements.
	const inboxIconElem = createHtmlElement("span", "inbox-icon", ["menu-icon", "inbox"], null);
	inboxIconElem.innerHTML = '<i class="bi bi-inboxes inbox"></i>';
	const inboxTextElem = createHtmlElement("span", null, ["menu-text", "inbox"], "Inbox");
	const todayIconElem = createHtmlElement("span", "today-icon", ["menu-icon", "today"], null);
	todayIconElem.innerHTML = '<i class="bi bi-calendar-day today"></i>';
	const todayTextElem = createHtmlElement("span", null, ["menu-text", "today"], "Today");
	const projectsIconElem = createHtmlElement("span", null, ["menu-icon"], null);
	projectsIconElem.innerHTML = '<i id="projects-icon" class="bi bi-chevron-down"></i>';
	const projectsTextElem = createHtmlElement("span", "projects-text", ["menu-text"], "Projects");
	const projectAddIconElem = createHtmlElement("span", "project-add", null, null);
	projectAddIconElem.innerHTML = '<i class="bi bi-plus-circle"></i>';

	//Modal attributes
	projectAddIconElem.setAttribute("data-bs-toggle", "modal");
	projectAddIconElem.setAttribute("data-bs-target", "#create-project-modal");

	//Accordion attributes from projectListElem
	projectsTextElem.setAttribute("data-bs-toggle", "collapse");
	projectsTextElem.setAttribute("data-bs-target", "#collapseOne");
	projectsTextElem.setAttribute("aria-expanded", "false");
	projectsTextElem.setAttribute("aria-controls", "collapseOne");

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
	projectsTextElem.onclick = () => document.querySelector("#projects-icon").classList.toggle("rotate");
	projectsListElem.onmouseover = () => projectAddIconElem.classList.add("project-add-show");
	projectsListElem.onmouseout = () => projectAddIconElem.classList.remove("project-add-show");

	return lateralMenuBarElem;
}

//Assist function. Creates project list element and returns it.
function renderProjectList(projects) {
	const projectList = createHtmlElement("ul", "accordion-list", null, null);
	$removeIcons = [];

	projects.forEach((project) => {
		const projectElem = createHtmlElement("li", null, ["accordion-list-elem","project-name"], null);
		projectElem.dataset.id = project.getProjectId();
		const projectNameElem = createHtmlElement("span", null, ["project-name"], project.getProjectName());
		projectNameElem.dataset.id = project.getProjectId();
		const removeIconElem = createHtmlElement("span", null, ["remove-icon"], null);
		removeIconElem.dataset.id = project.getProjectId();
		removeIconElem.innerHTML = '<i class="bi bi-dash-circle"></i>';

		$removeIcons.push(removeIconElem);

		projectElem.appendChild(projectNameElem);
		projectElem.appendChild(removeIconElem);
		projectList.appendChild(projectElem);

		//Show and hide the remove icon
		projectElem.onmouseover = () => removeIconElem.classList.add("remove-icon-show");
		projectElem.onmouseout = () => removeIconElem.classList.remove("remove-icon-show");

		//Remove Project icon functionality
		removeIconElem.onclick = () => {
			removeProject(removeIconElem.dataset.id);
			document.querySelector("#collapseOne").innerHTML = "";
			document.querySelector("#collapseOne").appendChild(renderProjectList($projects));
			renderProjectListAtTaskModal(document.querySelector("#task-project"));
		};

		//Render project page functionality
		projectElem.onclick = (e) => {
			let containerListElem = document.querySelector("#container-list");
			containerListElem.replaceWith(renderContainerList(e));
		};
	});

	return projectList;
}

export { renderLateralMenuBar, renderProjectList };
