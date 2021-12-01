import testFunction from "./test";
import {addProject} from "./project-button";


let projectButton = document.querySelector("#project-button");


testFunction();


//Event Listeners:
projectButton.addEventListener("click", addProject.projectDiv);
document.addEventListener("click", addProject.clickProjectButton);
document.addEventListener("click", addProject.clickDelProjectButton);

