import css from "../styles/style.css";

import { $content } from "../index.js";
import { createHtmlElement } from "../functions/tools.js";

let navBarElem, lateralMenuBarElem;

function renderMain() {
	$content.appendChild(renderNavBar());
	$content.appendChild(renderLateralMenuBar());
}

function renderNavBar() {
	navBarElem = createHtmlElement("nav", "nav-bar", null, null);

	//Creates group of Icons
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

function renderLateralMenuBar() {
	lateralMenuBarElem = createHtmlElement("div", "lateral-bar", null, null);

	const listMenuElem = createHtmlElement("li", "list-menu", null, null);
	

	lateralMenuBarElem.appendChild(listMenuElem);

	return lateralMenuBarElem;
}

export { renderMain };
