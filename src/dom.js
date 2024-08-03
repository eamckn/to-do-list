//import project from "./project.js";
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

        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        const ul = document.createElement("ul");
        const firstListItem = document.createElement("li");
        const lowPriorityLabel = document.createElement("label");
        const lowPriorityInput = document.createElement("input");
        const secondListItem = document.createElement("li");
        const medPriorityLabel = document.createElement("label");
        const medPriorityInput = document.createElement("input");
        const thirdListItem = document.createElement("li");
        const highPriorityLabel = document.createElement("label");
        const highPriorityInput = document.createElement("input");

        const addButton = document.createElement("button");

        // Add label content
        titleLabel.innerHTML = "Title";

        descriptionLabel.innerHTML = "Description";

        dueDateLabel.innerHTML = "Due Date";

        legend.innerHTML = "Priority";
        lowPriorityLabel.innerHTML = "Low";
        medPriorityLabel.innerHTML = "Medium";
        highPriorityLabel.innerHTML = "High";

        addButton.innerHTML = "Add";

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

        lowPriorityLabel.setAttribute("for", "low");
        lowPriorityInput.setAttribute("type", "radio");
        lowPriorityInput.setAttribute("id", "low");
        lowPriorityInput.setAttribute("name", "priority");
        lowPriorityInput.setAttribute("value", "low");
    
        medPriorityLabel.setAttribute("for", "medium");
        medPriorityInput.setAttribute("type", "radio");
        medPriorityInput.setAttribute("id", "medium");
        medPriorityInput.setAttribute("name", "priority");
        medPriorityInput.setAttribute("value", "medium");
        
        highPriorityLabel.setAttribute("for", "high");
        highPriorityInput.setAttribute("type", "radio");
        highPriorityInput.setAttribute("id", "high");
        highPriorityInput.setAttribute("name", "priority");
        highPriorityInput.setAttribute("value", "high");

        // Nest items
        fieldset.appendChild(legend);
        fieldset.appendChild(ul);
        ul.appendChild(firstListItem);
        ul.appendChild(secondListItem);
        ul.appendChild(thirdListItem);
        firstListItem.appendChild(lowPriorityLabel);
        firstListItem.appendChild(lowPriorityInput);
        secondListItem.appendChild(medPriorityLabel);
        secondListItem.appendChild(medPriorityInput);
        thirdListItem.appendChild(highPriorityLabel);
        thirdListItem.appendChild(highPriorityInput);

        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(descriptionLabel);
        form.appendChild(descriptionInput);
        form.appendChild(dueDateLabel);
        form.appendChild(dueDateInput);
        form.appendChild(fieldset);
        form.appendChild(addButton);

        dialog.appendChild(form);
        content.appendChild(dialog);

        // Add event listener for button to save values
        addButton.addEventListener('click', function() {
            let title = titleInput.value;
            let description = descriptionInput.value;
            let duedate = dueDateInput.value;
            let priority = document.querySelector("input[name = 'priority']:checked").value;

            //console.log( { title, description, duedate, priority } );

            controller.makeNewTodo( { title, description, duedate, priority });
        })

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
        todoToDisplay.className = "todo";
        const titleParagraph = document.createElement("p");
        titleParagraph.innerHTML = `${todo.title}`;
        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.innerHTML = `${todo.description}`;
        const duedateParagraph = document.createElement("p");
        duedateParagraph.innerHTML = `${todo.duedate}`;
        const priorityParagraph = document.createElement("p");
        priorityParagraph.innerHTML = `${todo.priority}`
        todoToDisplay.appendChild(titleParagraph);
        todoToDisplay.appendChild(descriptionParagraph);
        todoToDisplay.appendChild(duedateParagraph);
        todoToDisplay.appendChild(priorityParagraph);
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