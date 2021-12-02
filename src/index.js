import testFunction from "./test";
import {addProject} from "./project-button";
import {addToDo} from "./todo-button";


let projectButton = document.querySelector("#project-button");
let toDoButton = document.querySelector("#todo-button");


testFunction();


//Event Listeners:
projectButton.addEventListener("click", addProject.projectDiv);
document.addEventListener("click", addProject.clickProjectButton);
document.addEventListener("click", addProject.clickDelProjectButton);
document.addEventListener("select", addProject.selectTest);
toDoButton.addEventListener("click", addToDo.toDoDiv);
document.addEventListener("click", addToDo.clickToDoButton);
