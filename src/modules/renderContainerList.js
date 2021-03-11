import { createHtmlElement } from "../functions/tools.js";
import { $tasks } from "../index.js";

let containerListElem;

//TODO RENDER CONTAINER LIST

function renderContainerList(event) {
	containerListElem = createHtmlElement("div", "container-list", null, null);
	const headerListElem = createHtmlElement("nav", "header-list", null, null);
	const bodyListElem = createHtmlElement("div", "body-list", null, null);

	//Header	
	const titleHeaderElem = createHtmlElement("p", "title-header-list", null, null);
	if (!event || (event && event.target.id === "home-btn")) {
		titleHeaderElem.innerText = "Inbox";
	} else if(event !== undefined){
		console.log(event.target);
		titleHeaderElem.innerText = event.target.innerText;
		containerListElem.classList.add("toggle-container");
	}

	headerListElem.appendChild(titleHeaderElem);

	//Body

	containerListElem.appendChild(headerListElem);
	containerListElem.appendChild(bodyListElem);	

	return containerListElem;
}

//Test purposes
function renderList() {
	const testElem = createHtmlElement("ul", null, null, null);
	if ($tasks.length > 0) {
		$tasks.forEach((elem) => {
			console.log(elem.getTitle());
			let liElem = createHtmlElement("li", null, null, elem.getTitle());
			console.log(liElem);
			testElem.appendChild(liElem);
			console.log(testElem);
		});
	}
	return testElem;
}

export { renderContainerList, renderList };
