//COMMON ASSIST FUNCTIONS

//When called, create an html element with id, and/or classes and/or content.
function createHtmlElement(type, id, arrayClasses, content) {
	const element = document.createElement(type);
	if (id) element.id = id;
	if (arrayClasses) {
		arrayClasses.forEach((myClass) => element.classList.add(myClass));
	}
	if (content) element.innerText = content;

	return element;
}

function generateID() {
	return "_" + Math.random().toString(36).substr(2, 9);
}

export { createHtmlElement, generateID };