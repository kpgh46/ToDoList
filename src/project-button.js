
let container = document.querySelector("#container");

let addProject = (() => {

    let projectDiv = () => {

        //Small project div:
        const createProject = document.createElement('div');
        createProject.classList.add('create-project');

        //project header:
        let projectNameHeader = document.createElement('h3');
        projectNameHeader.textContent = "Project Name:"

        //text field under header:
        let projectTextField = document.createElement("input");
        projectTextField.setAttribute("type", "text");
        projectTextField.id = "project-textfield"

        let submitButton = document.createElement("button");
        submitButton.textContent = "Create Project";
        submitButton.setAttribute("type", "submit");
        submitButton.classList.add("submit-button");
        submitButton.id = "submit-project"

        //appending to small Div
        createProject.appendChild(projectNameHeader);
        createProject.appendChild(projectTextField);
        createProject.appendChild(submitButton);

        container.appendChild(createProject);
    }

    let clickProjectButton = (event)  =>{
        let el = event.target

        if(el.id === "submit-project"){
            let x = document.querySelector("#project-textfield").value;
            let newProjects = document.querySelector("#new-project");
            let y = document.querySelector(".create-project");

            //delete button
            let delButton = document.createElement('button');
            delButton.textContent = "-";
            delButton.classList.add('del-button');
            delButton.id = 'del-project'
            
            let newProjectDiv = document.createElement('div');
            newProjectDiv.classList.add("project-add");
            newProjectDiv.textContent = x;
            y.remove();
            newProjectDiv.appendChild(delButton);
            newProjects.appendChild(newProjectDiv);

        };
    }

    let clickDelProjectButton = (event) => {
        let el = event.target;

        if (el.id === "del-project"){
            console.log("del button clicked");
            el.parentElement.remove();
        }

    }


    return {projectDiv, clickProjectButton, clickDelProjectButton}

})();

export {addProject}