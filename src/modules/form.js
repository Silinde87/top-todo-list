import { addProject } from "../modules/project.js";
import { createProjectForm, createTaskForm } from "../modules/renderModals.js";

//Invoked when form is submitted.
function submitForm(event) {
	event.preventDefault();

    switch(event.target.id){
        //Case Project Form
        case "add-project-btn":
            let projectModal = bootstrap.Modal.getInstance(document.getElementById("create-project-modal"));
            let projectName = createProjectForm.querySelector("#project-name").value;

            let fields = [projectName];

            if (!validateForm(fields)) return false;
    
            addProject(projectName);
    
            createProjectForm.reset();
            projectModal.hide();
            break;
        //Case Task Form
        case "add-task-btn":
            console.log(createTaskForm);
            break;
    }

}

function fillForm() {}

function validateForm(fieldsForm) {
    let flag = true;
    
    fieldsForm.forEach(field => {        
        if(field === '') flag = false;
    });    

    return flag;
}

export { submitForm };
