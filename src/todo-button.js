let dataId = 0;
let newtodoChildren = document.querySelector("#new-todo").children;

let addToDo = (() => {

    let capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let addToDoButton = () => {
        document.querySelector("#add-project-button").disabled = true;

        let createNewToDoDiv = document.createElement("div");
        createNewToDoDiv.id = "new-todo-div";

        let todoDivHeader = document.createElement("h3");
        todoDivHeader.textContent = "Add To Do:"
        todoDivHeader.classList.add("small-div-header");
        todoDivHeader.id = "todo-div-header";
        createNewToDoDiv.appendChild(todoDivHeader);

        let todoFields = ["title", "description", "date", "priority"]

        todoFields.forEach(field => {
            let section = document.createElement('input');
            section.id = field;
            section.classList.add('todo-Input');
            section.setAttribute("type", "text");
            section.setAttribute("placeholder", capitalize(field));

            createNewToDoDiv.appendChild(section);
            
        });

        let createTodoButton = document.createElement('button');
        createTodoButton.textContent = "Add ToDo"
        createTodoButton.classList.add("small-div-button");
        createTodoButton.id = "create-todo";
        createNewToDoDiv.appendChild(createTodoButton);

        document.querySelector("#mainpage").appendChild(createNewToDoDiv);
        
    }

    //need to create timeout feature
    let noValueError = (parent) => {

        let errorMessage = document.createElement('div');
        errorMessage.classList.add("error-message");
        errorMessage.id = "todo-error";
        errorMessage.textContent = "Missing value";

        parent.parentNode.insertBefore(errorMessage,parent);

        // clearTimeout(errorMessage.remove(), 2000)

    }

        let checkDivExists = (id) => {
  
        for (let i = 0; i < newtodoChildren.length; i++){
          if (newtodoChildren[i].dataset.id === id){
            return true
          }
        }
        }


      let addDiv = (dataid,child) => {
        let parent = document.querySelector(`.div-wrapper[data-id="${dataid}"]`);
        parent.appendChild(child);
      }

        let submitToDo = (event) => {

        let el = event.target;
        
        if (el.id === "create-todo"){

            let title1 = document.querySelector("#title").value;
            let test = document.querySelector("#title");
            let description2 = document.querySelector("#description").value;
            let date3 = document.querySelector("#date").value;
            let priority4 = document.querySelector("#priority").value;

            if (title1 === '' || description2 === '' || date3 === '' || priority4 === ''){
                noValueError(test);
                }
                else{

                let newToDo = (title,description,date, priority) => {
                    return {title, description, date, priority}
                }

                let currentDataId = document.querySelector(".active").getAttribute("data-id");
                // let currentDataId2 = parseInt(currentDataId)

               
                

                //create the actual div
                let toDoDivList = document.createElement('div');
                toDoDivList.classList.add("todo-entry");

                let toDoObject = newToDo(title1,description2,date3,priority4);

                //----create the mini divs ------
                let titleToDo = document.createElement("div");
                titleToDo.textContent = toDoObject.title;
                titleToDo.classList.add('mini-div')
                titleToDo.id = "title-todo";

                let descriptionToDo = document.createElement("div");
                descriptionToDo.textContent = `Description: ${toDoObject.description}`;
                descriptionToDo.classList.add('mini-div');
                descriptionToDo.id = "description-todo"

                let dateToDo = document.createElement("div");
                dateToDo.textContent = `Date: ${toDoObject.date}`;
                dateToDo.classList.add('mini-div');
                dateToDo.id = "date-todo";

                let priorityToDo = document.createElement("div");
                priorityToDo.textContent = `Priority: ${toDoObject.priority}`;
                priorityToDo.classList.add('mini-div');
                priorityToDo.id = "priority-todo";
                //----create the mini divs ------

                //append the mini divs to actual div
                toDoDivList.appendChild(titleToDo);
                toDoDivList.appendChild(descriptionToDo)
                toDoDivList.appendChild(dateToDo)
                toDoDivList.appendChild(priorityToDo);
                
                
                //logic
                
                if (checkDivExists(currentDataId)){
                    addDiv(currentDataId,toDoDivList);
                } else {
                    let newWrapper = document.createElement('div');
                    newWrapper.setAttribute("data-id", currentDataId);
                    newWrapper.classList.add('div-wrapper');
                    newWrapper.appendChild(toDoDivList);
                    document.querySelector("#new-todo").appendChild(newWrapper);
                }
                
                document.querySelector("#new-todo-div").remove();
                document.querySelector("#add-project-button").disabled = false;
                
                
            };
            
            
        }

    }

    return {addToDoButton, submitToDo, noValueError}

})();


export { addToDo }