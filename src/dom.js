import project from "./project.js";
import { controller } from "./index.js";

export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

    function showProjectInSideBar(project) {
        const projectToDisplay = document.createElement("button");
        projectToDisplay.innerHTML = project.name;
        sidebar.appendChild(projectToDisplay);
        projectToDisplay.addEventListener('click', function() {
            displayProjectTodos(project);
            controller.updateCurrentProject(project);
        });
    }

    function showTodoinDisplay(todo) {
        const todoToDisplay = document.createElement("div");
        todoToDisplay.innerHTML = `Title: ${todo.title} \n
                                   Description: ${todo.description}
                                   Due Date: ${todo.duedate}
                                   Priority: ${todo.priority}`
        display.appendChild(todoToDisplay);
    }

    function displayNewProject(project) {
        const newProject = document.createElement("button");
        newProject.innerHTML = project.name;
        sidebar.appendChild(newProject);
        newProject.addEventListener('click', function() {
            displayProjectTodos(project);
            controller.updateCurrentProject(project);
        });
    }

    function displayProjectTodos(project) {
        clearDisplay();
        console.log(project);
        for (const item of project.todos) {
            showTodoinDisplay(item);
        }
    }

    function clearDisplay() {
        while (display.firstChild) {
            display.removeChild(display.firstChild);
        }
    }


    return { showProjectInSideBar, showTodoinDisplay, displayNewProject };

}