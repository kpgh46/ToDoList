let container = document.querySelector("#container");

let addToDo = (() => {

    let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let toDoDiv = () => {

        // toDo pop up div:
        const createToDo = document.createElement('div');
        createToDo.classList.add('create-todo');

        // toDo pop up header:
        let toDoHeader = document.createElement('h3');
        toDoHeader.textContent = "To Do:"
        createToDo.appendChild(toDoHeader);

        let toDoFields = ["title", "description", "duedate", "priority"];

        // iterate fields and add input elements:
        toDoFields.forEach(el => {
            let section = document.createElement('input');
            section.id = el;
            section.classList.add('todoinput');
            section.setAttribute("type", "text");
            section.setAttribute("name", el);
            let placetext = capitalize(el)
            section.placeholder = placetext;

            createToDo.appendChild(section);

        });

        //append everything together:
        let createToDoButton = document.createElement('button');
        createToDoButton.textContent = "create button";
        createToDoButton.classList.add("submit-button");
        createToDoButton.id = "create-todo";
        createToDo.appendChild(createToDoButton);

        
        container.appendChild(createToDo);
    }

    // factory function to create todo object:
    let toDoObject = (title, description, duedate, priority) => {
        return {title,description,duedate,priority}
    }

    // when button is clicked, it pushes current values to "currentTodo" array:
    let clickToDoButton = (event) => {
        let el = event.target;

        if(el.id === "create-todo"){
            let title = document.querySelector("#title").value;
            let description = document.querySelector("#description").value;
            let duedate = document.querySelector("#duedate").value;
            let priority = document.querySelector("#priority").value;

            let newToDoObject = toDoObject(title,description,duedate,priority);

            let toDoDiv = document.createElement('div');
            toDoDiv.classList.add("todo-add")
            toDoDiv.textContent = `Title: ${newToDoObject.title} -- Description: ${newToDoObject.description} -- Due Date: ${newToDoObject.duedate} -- Priority: ${newToDoObject.priority}`;
            right.appendChild(toDoDiv);
            
            document.querySelector("#title").value = '';
            document.querySelector("#description").value = '';
            document.querySelector("#duedate").value = '';
            document.querySelector("#priority").value = '';
        }
        
    }


    return { toDoDiv, clickToDoButton, };
    
})();

export {addToDo};