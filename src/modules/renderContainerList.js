import { createHtmlElement } from "../functions/tools.js";

let containerListElem;

function renderContainerList() {
	containerListElem = createHtmlElement("div", "container-list", null, null);
	const testElem = createHtmlElement("span", null, null, "THIS IS FOR TESTING PURPOSES");
	containerListElem.appendChild(testElem);

	return containerListElem;
}

export { renderContainerList };
