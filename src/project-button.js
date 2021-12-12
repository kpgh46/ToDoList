import { addToDo } from "./todo-button";

let projectCount = 0;

let addProject = (() => {

    let addProjectButton = () => {
        document.querySelector("#add-todo-button").disabled = true;

        const createNewProjectDiv = document.createElement('div');
        createNewProjectDiv.id = 'new-project-div';

        const projectDivHeader = document.createElement('h3');
        projectDivHeader.textContent = 'Project Name:';
        projectDivHeader.classList.add('small-div-header');

        const projectNameField = document.createElement('input');
        projectNameField.setAttribute('type', 'text');
        projectNameField.setAttribute('label', 'Project Name');
        projectNameField.setAttribute('placeholder', "Project Name");
        projectNameField.classList.add('text-fields');
        projectNameField.id = 'project-name-field'

        const projectSubmitBtn = document.createElement('button');
        projectSubmitBtn.textContent = "Submit Project";
        projectSubmitBtn.id = "project-submit";
        projectSubmitBtn.classList.add('small-div-button');

        createNewProjectDiv.appendChild(projectDivHeader);
        createNewProjectDiv.appendChild(projectNameField);
        createNewProjectDiv.appendChild(projectSubmitBtn);

        document.querySelector("#mainpage").appendChild(createNewProjectDiv);

    }

    let clickSubmitButton = (event) => {
        let el = event.target;
        let newProject = document.querySelector("#new-project");

        // if e.target = project submit, take value from text field and create div in project list:
        if (el.id === 'project-submit') {

            let test2 = document.querySelector("#project-name-field").value;
            let test1 = document.querySelector("#project-name-field");

            if (test2 === '') {

                addToDo.noValueError(test1);

                } else {

                    let projectName = document.querySelector("#project-name-field").value;
                    let projectDiv = document.createElement('div');
                    projectDiv.setAttribute("data-id", `${projectCount}`);
                    projectDiv.textContent = projectName;
                    projectDiv.classList.add('project-entry');
                    newProject.appendChild(projectDiv);

                    //create delete button
                    let projectDelBtn = document.createElement('button');
                    projectDelBtn.classList.add('del-button');
                    projectDelBtn.id = "project-del-button";
                    projectDelBtn.textContent = "X";    
                    projectDiv.appendChild(projectDelBtn);

                    //clear value and close new project window:
                    document.querySelector("#project-name-field").value = '';
                    document.querySelector("#new-project-div").remove();

                    projectCount++;

                    document.querySelector("#add-todo-button").disabled = false;
                
                }
            
            
        }
    }

    let deleteProjectButton = (event) => {
        let el = event.target;

        if (el.id === 'project-del-button'){
            el.parentElement.remove();
        }
      
    }

    let selectProject = (event) => {
        let el = event.target;
        let projectNodeList = document.querySelectorAll(".project-entry");

        if (el.classList.contains("project-entry")){
            projectNodeList.forEach(node => node.classList.remove('active'));

            el.classList.add('active');

            console.log(projectNodeList);

        }
    }



    return {addProjectButton, clickSubmitButton, deleteProjectButton, selectProject}

})();

export { addProject };