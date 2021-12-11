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
        createTodoButton.textContent = "Create Button"
        createTodoButton.classList.add("small-div-button");
        createTodoButton.id = "create-todo";
        createNewToDoDiv.appendChild(createTodoButton);

        document.querySelector("#mainpage").appendChild(createNewToDoDiv);


    }



    return {addToDoButton}

})();

export { addToDo }