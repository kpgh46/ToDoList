import { addToDo } from "./todo-button";

let projectCount = 0;
let currentProjectCount = 0;

let addProject = (() => {

    let disableToDo = (count) => {
        let btnToDo = document.querySelector("#add-todo-button");
        if (count === 0 ) {
            btnToDo.disabled = true;
        } else {
            btnToDo.disabled = false;
        }
    }

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

                    //create ToDo wrapper
                    let newWrapper = document.createElement('div');
                    newWrapper.setAttribute("data-id", `${projectCount}`);
                    newWrapper.classList.add('div-wrapper');
                    document.querySelector("#new-todo").appendChild(newWrapper);
                    

                    //create delete button
                    let projectDelBtn = document.createElement('button');
                    projectDelBtn.classList.add('del-button');
                    projectDelBtn.setAttribute("data-id", `${projectCount}`);
                    projectDelBtn.id = "project-del-button";
                    projectDelBtn.textContent = "X";    
                    projectDiv.appendChild(projectDelBtn);

                    //clear value and close new project window:
                    document.querySelector("#project-name-field").value = '';
                    document.querySelector("#new-project-div").remove();

                    projectCount++;
                    currentProjectCount++;
                    

                    document.querySelector("#add-todo-button").disabled = false;
                
                }
        }
        
    }

    let deleteProjectButton = (event) => {
        let el = event.target;

        if (el.id === 'project-del-button'){


            let newtodoChildren = document.querySelector("#new-todo").children;
            let dataId = el.getAttribute("data-id");
            for (let i = 0; i < newtodoChildren.length; i++) {
                console.log(dataId);
                if (newtodoChildren[i].dataset.id === dataId){
                    newtodoChildren[i].remove()
                }
            }

            el.parentElement.remove();
            currentProjectCount--
            disableToDo(currentProjectCount);
        }
      
    }

    let selectProject = (event) => {
        let el = event.target;
        let projectNodeList = document.querySelectorAll(".project-entry");

        if (el.classList.contains("project-entry")){
            projectNodeList.forEach(node => node.classList.remove('active'));

            el.classList.add('active');

            let dataId = document.querySelector(".active").getAttribute("data-id");
            let newtodoChildren = document.querySelector("#new-todo").children;

            if (newtodoChildren.length > 0){
                for (let i = 0; i < newtodoChildren.length; i++) {
                    if (newtodoChildren[i].dataset.id === dataId){
                        let allDivWrappers = document.querySelectorAll(".div-wrapper");
                        allDivWrappers.forEach(node => node.classList.remove('active-todo'))
                        newtodoChildren[i].classList.add("active-todo");
                    }
                }
            }
        

        }
    }


    return {addProjectButton, clickSubmitButton, deleteProjectButton, selectProject, disableToDo}

})();

export { addProject, projectCount,currentProjectCount };