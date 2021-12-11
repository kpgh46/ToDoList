let dataId = 0;

let addToDo = (() => {

    let capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let addToDoButton = () => {
        let createNewToDoDiv = document.createElement("div");
        createNewToDoDiv.id = "new-todo-div";


        let todoDivHeader = document.createElement("h3");
        todoDivHeader.textContent = "Add To Do:"
        todoDivHeader.classList.add("small-div-header");
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

    let submitToDo = (event) => {

        let el = event.target;



        if (el.id === "create-todo"){

            let title1 = document.querySelector("#title").value;
            let description2 = document.querySelector("#description").value;
            let date3 = document.querySelector("#date").value;
            let priority4 = document.querySelector("#priority").value;

            let newToDo = (title,description,date, priority) => {
                return {title, description, date, priority}
            }
            
            let toDoDivList = document.createElement('div');
            toDoDivList.classList.add("project-entry");

            let toDoObject = newToDo(title1,description2,date3,priority4);
            let toDoObjectArr = Object.values(toDoObject);

            console.log(toDoObject);
            console.log(Object.values(toDoObject));
           

            Object.entries(toDoObject).forEach(el => {

                let miniDiv = document.createElement('div');
                miniDiv.classList.add('mini-div');
                miniDiv.textContent = el;

                toDoDivList.appendChild(miniDiv);
                
            });

            document.querySelector("#new-todo").appendChild(toDoDivList);

            document.querySelector("#new-todo-div").value = '';
        }

    }



    return {addToDoButton, submitToDo}

})();

export { addToDo }