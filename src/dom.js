//import project from "./project.js";
import { controller } from "./index.js";
import trashCan from './svgs/trash-can-outline.svg';
import editPencil from './svgs/file-edit-outline.svg';

export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

    function displayDialogForProject() {
        let dialog = buildProjectDialog()
        dialog.querySelector("button").addEventListener('click', function() {
            let name = dialog.querySelector("input").value;

            controller.makeNewProject(name);
        })
        dialog.showModal();
    }

    function displayDialogForInput() {
        let dialog = buildTodoDialog();
        // Add event listener for button to save values
        dialog.querySelector("button").addEventListener('click', function() {
            let title = dialog.querySelector("input[id = 'title']").value;
            let description = dialog.querySelector("textarea[id = 'description']").value;
            let duedate = dialog.querySelector("input[id = 'duedate']").value;
            let priority = dialog.querySelector("input[name = 'priority']:checked").value;

            controller.makeNewTodo( { title, description, duedate, priority });
        })
        dialog.showModal();
    }

    function displayDialogForEditing(todo, todoToDisplay) {
        let dialog = buildTodoDialog();
        dialog.querySelector("input[id = 'title']").value = todo.title;
        dialog.querySelector("textarea[id = 'description']").value = todo.description;
        dialog.querySelector("input[id = 'duedate']").value = todo.duedate;
        if (todo.priority === "low") {
            dialog.querySelector("input[id = 'low']").checked = true;
        }
        else if (todo.priority === "medium") {
            dialog.querySelector("input[id = 'medium']").checked = true;
        }
        else if (todo.priority === "high") {
            dialog.querySelector("input[id = 'high']").checked = true;
        }
        dialog.showModal();
        dialog.querySelector("button").addEventListener('click', function() {
            let title = dialog.querySelector("input[id = 'title']").value;
            let description = dialog.querySelector("textarea[id = 'description']").value;
            let duedate = dialog.querySelector("input[id = 'duedate']").value;
            let priority = dialog.querySelector("input[name = 'priority']:checked").value;

            controller.editTodo(todo, { title, description, duedate, priority });
            editTodoInDisplay(todoToDisplay, { title, description, duedate, priority });

        })
    }

    function editTodoInDisplay(todoToDisplay, newTodoItem) {
        let titleParagraph = todoToDisplay.querySelector(".todo-info p:nth-child(1)");
        let duedateParagraph = todoToDisplay.querySelector(".todo-info p:nth-child(2)");
        let descriptionParagraph = todoToDisplay.querySelector(".todo-info p:nth-child(3)");
        let priorityIndicator = todoToDisplay.querySelector(".priority-container button");

        titleParagraph.innerHTML = newTodoItem.title;
        duedateParagraph.innerHTML = newTodoItem.duedate;
        descriptionParagraph.innerHTML = newTodoItem.description;
        setPriorityIndicatorColor(priorityIndicator, newTodoItem);
    }

    function buildTodoDialog() {
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

        dueDateLabel.setAttribute("for", "duedate");
        dueDateInput.setAttribute("type", "text");
        dueDateInput.setAttribute("id", "duedate");
        dueDateInput.setAttribute("name", "duedate");

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

        return dialog;
    }

    function buildProjectDialog() {
        const dialog = document.createElement("dialog");
        const form = document.createElement("form");
        const projectLabel = document.createElement("label");
        const projectInput = document.createElement("input");
        const addProjectButton = document.createElement("button");

        form.setAttribute("method", "dialog");
        projectLabel.setAttribute("for", "project_name");
        projectInput.setAttribute("type", "text");
        projectInput.setAttribute("id", "project_name");
        projectInput.setAttribute("name", "project_name");

        projectLabel.innerHTML = "New project name:";
        addProjectButton.innerHTML = "Add project";

        form.appendChild(projectLabel);
        form.appendChild(projectInput);
        form.appendChild(addProjectButton);
        dialog.appendChild(form);

        content.appendChild(dialog);

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

        const priorityContainer = document.createElement("div");
        priorityContainer.className = "priority-container";
        const priorityIndicator = document.createElement("button");
        priorityIndicator.className = "priority-button";
        priorityContainer.appendChild(priorityIndicator);

        const todoInfo = document.createElement("div");
        todoInfo.className = "todo-info";
        const titleParagraph = document.createElement("p");
        titleParagraph.innerHTML = `${todo.title}`;
        titleParagraph.className = "title paragraph";
        const duedateParagraph = document.createElement("p");
        duedateParagraph.innerHTML = `${todo.duedate}`;
        duedateParagraph.className = "duedate paragraph";
        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.innerHTML = `${todo.description}`;
        descriptionParagraph.className = "description paragraph";
        descriptionParagraph.style.display = "none";
        todoInfo.appendChild(titleParagraph);
        todoInfo.appendChild(duedateParagraph);
        todoInfo.appendChild(descriptionParagraph);

        const optionsContainer = document.createElement("div");
        optionsContainer.className = "options-container";
        const trashDiv = document.createElement("div");
        trashDiv.className = "image-container options-item";
        const trashIcon = new Image();
        trashIcon.src = trashCan;
        const completedCheckbox = document.createElement("input");
        completedCheckbox.className = "options-item";
        completedCheckbox.setAttribute("type", "checkbox");
        const editDiv = document.createElement("div");
        editDiv.className = "image-container options-item";
        const editIcon = new Image();
        editIcon.src = editPencil;
        trashDiv.appendChild(trashIcon);
        editDiv.appendChild(editIcon);
        optionsContainer.appendChild(editDiv);
        optionsContainer.appendChild(completedCheckbox);
        optionsContainer.appendChild(trashDiv);


        todoToDisplay.appendChild(priorityContainer);
        todoToDisplay.appendChild(todoInfo);
        todoToDisplay.appendChild(optionsContainer);

        display.appendChild(todoToDisplay);

        setPriorityIndicatorColor(priorityIndicator, todo);
        todoInfo.addEventListener('click', function() {
            toggleTodoDescription(descriptionParagraph);
        })
        trashIcon.addEventListener('click', function() {
            display.removeChild(todoToDisplay);
            controller.removeFromCurrentProject(todo);
        })
        editIcon.addEventListener('click', function() {
            displayDialogForEditing(todo, todoToDisplay);
        })
    }

    function setPriorityIndicatorColor(priorityIndicator, todo) {
        priorityIndicator.style.backgroundColor = getPriorityIndicatorColor(todo.priority);
    }

    function getPriorityIndicatorColor(priority) {
        if (priority === "low") return "green";
        else if (priority === "medium") return "yellow";
        else if (priority === "high") return "red";
    }

    function toggleTodoDescription(descriptionParagraph) {
        descriptionParagraph.style.display = descriptionParagraph.style.display === "none"
                                                                                ? "block"
                                                                                : "none"; 
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

    function showCurrentProjectInDisplay(currentProject) {
        let currentProjectName = document.querySelector("p#current-project");
        currentProjectName.innerHTML = currentProject.name;
    }


    return { showProjectInSideBar, showTodoinDisplay, displayNewProject, 
            displayDialogForInput, editTodoInDisplay, clearDisplay,
            displayDialogForProject, showCurrentProjectInDisplay };

}