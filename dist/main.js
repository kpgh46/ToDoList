(()=>{"use strict";let e=0,t=()=>{const e=document.createElement("div");e.id="new-project-div";const t=document.createElement("h3");t.textContent="Project Name:",t.classList.add("small-div-header");const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("label","Project Name"),d.setAttribute("placeholder","Project Name"),d.classList.add("text-fields"),d.id="project-name-field";const o=document.createElement("button");o.textContent="Submit Project",o.id="project-submit",o.classList.add("small-div-button"),e.appendChild(t),e.appendChild(d),e.appendChild(o),document.querySelector("#mainpage").appendChild(e)},d=t=>{let d=t.target,o=document.querySelector("#new-project");if("project-submit"===d.id){let t=document.querySelector("#project-name-field").value,d=document.createElement("div");d.setAttribute("data-id",`${e}`),d.textContent=t,d.classList.add("project-entry"),o.appendChild(d);let c=document.createElement("button");c.classList.add("del-button"),c.id="project-del-button",c.textContent="X",d.appendChild(c),document.querySelector("#project-name-field").value="",document.querySelector("#new-project-div").remove(),e++}},o=e=>{let t=e.target;"project-del-button"===t.id&&t.parentElement.remove()},c=e=>{let t=e.target,d=document.querySelectorAll(".project-entry");t.classList.contains("project-entry")&&(d.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),console.log(d))},n=()=>{let e=document.createElement("div");e.id="new-todo-div";let t=document.createElement("h3");t.textContent="Add To Do:",t.classList.add("small-div-header"),e.appendChild(t),["title","description","date","priority"].forEach((t=>{let d=document.createElement("input");var o;d.id=t,d.classList.add("todo-Input"),d.setAttribute("type","text"),d.setAttribute("placeholder",(o=t).charAt(0).toUpperCase()+o.slice(1)),e.appendChild(d)}));let d=document.createElement("button");d.textContent="Add ToDo",d.classList.add("small-div-button"),d.id="create-todo",e.appendChild(d),document.querySelector("#mainpage").appendChild(e)},l=e=>{if("create-todo"===e.target.id){let e=document.querySelector("#title").value,t=document.querySelector("#description").value,d=document.querySelector("#date").value,o=document.querySelector("#priority").value,c=(e,t,d,o)=>({title:e,description:t,date:d,priority:o}),n=document.createElement("div");n.classList.add("project-entry");let l=c(e,t,d,o);Object.values(l),console.log(l),console.log(Object.values(l)),Object.entries(l).forEach((e=>{let t=document.createElement("div");t.classList.add("mini-div"),t.textContent=e,n.appendChild(t)})),document.querySelector("#new-todo").appendChild(n),document.querySelector("#new-todo-div").value=""}};const r=document.querySelector("#add-project-button"),a=document.querySelector("#add-todo-button");r.addEventListener("click",t),document.addEventListener("click",d),document.addEventListener("click",o),document.addEventListener("click",c),a.addEventListener("click",n),document.addEventListener("click",l)})();