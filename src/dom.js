import project from "./project";

const proj = project();

export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

    function showProjectInSideBar(project) {
        const projectToDisplay = document.createElement("button");
        projectToDisplay.innerHTML = project.name;
        sidebar.appendChild(projectToDisplay);
    }

    function showTodoinDisplay(todo) {
        const todoToDisplay = document.createElement("div");
        todoToDisplay.innerHTML = `Title: ${todo.title} \n
                                   Description: ${todo.description}
                                   Due Date: ${todo.duedate}
                                   Priority: ${todo.priority}`
        display.appendChild(todoToDisplay);
    }

    return { showProjectInSideBar, showTodoinDisplay };

}