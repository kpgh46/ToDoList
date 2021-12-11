import { addProject } from "./project-button";
import { addToDo } from "./todo-button";

const addProjectbtn = document.querySelector("#add-project-button");
const addToDoBtn = document.querySelector("#add-todo-button")

addProjectbtn.addEventListener("click", addProject.addProjectButton);

document.addEventListener("click", addProject.clickSubmitButton);
document.addEventListener("click", addProject.deleteProjectButton);
document.addEventListener("click", addProject.selectProject);
addToDoBtn.addEventListener("click", addToDo.addToDoButton);
document.addEventListener("click", addToDo.submitToDo);