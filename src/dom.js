import project from "./project.js";
import { controller } from "./index.js";

export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

    function displayInputDialog() {
        let dialog = buildInputDialog();
        dialog.showModal();
    }

    function buildInputDialog() {
        // Create dialog elements
        const dialog = document.createElement("dialog");
        const form = document.createElement("form");
        const titleLabel = document.createElement("label");
        const titleInput = document.createElement("input");
        const descriptionLabel = document.createElement("label");
        const descriptionInput = document.createElement("textarea");
        const dueDateLabel = document.createElement("label");
        const dueDateInput = document.createElement("input");
        const priorityLabel = document.createElement("label");
        const priorityInput = document.createElement("input");

        // Add label content
        titleLabel.innerHTML = "Title";
        descriptionLabel.innerHTML = "Description";
        dueDateLabel.innerHTML = "Due Date";
        priorityLabel.innerHTML = "Priority";

        // Add necessary attributes
        form.setAttribute("method", "dialog");

        titleLabel.setAttribute("for", "title");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "title");
        titleInput.setAttribute("name", "title");

        descriptionLabel.setAttribute("for", "description");
        descriptionInput.setAttribute("rows", "8");
        descriptionInput.setAttribute("cols", "20");
        descriptionInput.setAttribute("id", "description");
        descriptionInput.setAttribute("name", "description");

        // Nest items
        content.appendChild(dialog);
        dialog.appendChild(form);
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(descriptionLabel);
        form.appendChild(descriptionInput);
        form.appendChild(dueDateLabel);
        form.appendChild(dueDateInput);
        form.appendChild(priorityLabel);
        form.appendChild(priorityInput);

        return dialog;
    }

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


    return { showProjectInSideBar, showTodoinDisplay, displayNewProject, displayInputDialog };

}