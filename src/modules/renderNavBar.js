import { createHtmlElement } from "../functions/tools.js";

let navBarElem;

//Renders the NAVIGATION BAR and returns it as DOM Element
function renderNavBar() {
	navBarElem = createHtmlElement("nav", "nav-bar", null, null);

	//Creates group of Icons.
	const leftGroupIconElem = createHtmlElement("div", "left-group-icon", ["nav-icon-group"], null);
	const rightGroupIconElem = createHtmlElement("div", "right-group-icon", ["nav-icon-group"], null);

	//Creates divs which contain every icon.
	const hamBarsIconElem = createHtmlElement("div", "ham-btn", ["nav-icon"], null);
	hamBarsIconElem.innerHTML = '<i class="bi bi-list"></i>';
	const homeIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	homeIconElem.innerHTML = '<i class="bi bi-house-door"></i>';
	const addIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	addIconElem.innerHTML = '<i class="bi bi-plus"></i>';
	const completedIconElem = createHtmlElement("div", null, ["nav-icon"], null);
	completedIconElem.innerHTML = '<i class="bi bi-calendar-check"></i>';

	//Modal attributes
	addIconElem.setAttribute("data-bs-toggle", "modal");
	addIconElem.setAttribute("data-bs-target", "#create-task-modal");

	leftGroupIconElem.appendChild(hamBarsIconElem);
	leftGroupIconElem.appendChild(homeIconElem);
	rightGroupIconElem.appendChild(addIconElem);
	rightGroupIconElem.appendChild(completedIconElem);

	navBarElem.appendChild(leftGroupIconElem);
	navBarElem.appendChild(rightGroupIconElem);

	return navBarElem;
}

export { renderNavBar };
