import './style.css';
import toDo from './todo.js';
import project from './project.js';
import domManip from './dom.js';

const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const display = document.querySelector("#display");

const newTodoButton = document.querySelector("#create-todo");
const newProjectButton = document.querySelector("#create-project");

const controller = (function() {

    const todo = toDo();

    const proj = project();

    const dom = domManip();

    const defaultProject = proj.create('Default');

    const allProjects = [defaultProject];

    let currentProject = defaultProject;

    // Create 2 new todos
    let defaultTodo = todo.create("First ever task", "Here's my description. It's really really long. I made it this long to test out how descriptions will wrap.", "Tomorrow", "low");
    let newTodo = todo.create("Clean room", "It's messy.", "Tomorrow", "high");
    let otherTodo = todo.create("Call mom", "You need to talk about your plane ticket.", "Tomorrow", "high");
    // Add them to the default project
    defaultProject.addTodo(defaultTodo);
    defaultProject.addTodo(newTodo);
    defaultProject.addTodo(otherTodo);
    // Create new project
    const personalTasks = proj.create("Personal tasks");
    allProjects.push(personalTasks);
    // Remove todos from default
    defaultProject.removeTodo(newTodo);
    personalTasks.addTodo(newTodo);

    function displayAllProjects() {
        for (const item of allProjects) {
            dom.showProjectInSideBar(item);
        }
    }

    function displayCurrentProjectTodos() {
        for (const item of currentProject.todos) {
            dom.showTodoinDisplay(item);
        }
    }

    function makeNewTodo(todoFromModal) {
        newTodo = todo.create(todoFromModal.title, todoFromModal.description, todoFromModal.duedate, todoFromModal.priority);
        currentProject.addTodo(newTodo);
        dom.showTodoinDisplay(newTodo);
    }

    function editTodo(todo, todoFromModal) {
        for (const item of currentProject.todos) {
            if (item.title === todo.title) {
                item.updateTitle(todoFromModal.title);
                item.updateDescription(todoFromModal.description);
                item.updateDueDate(todoFromModal.duedate);
                item.updatePriority(todoFromModal.priority);
                console.log(item);
                console.log(currentProject.todos);
            }
        }
    }

    function getTodoFields() {
        dom.displayDialogForInput();
    }

    function makeNewProject() {
        let name = getProjectName();
        if (name) {
            let newProject = proj.create(name);
            allProjects.push(newProject);
            dom.displayNewProject(newProject);
            console.log(newProject);
            console.log(allProjects);
        }
    }

    function getProjectName() {
        return prompt("What would you like to name this project?")
    }

    function updateCurrentProject(project) {
        currentProject = project;
        console.log(currentProject);
    }

    function removeFromCurrentProject(todo) {
        currentProject.removeTodo(todo);
    }

    document.addEventListener('DOMContentLoaded', displayAllProjects)
    document.addEventListener('DOMContentLoaded', displayCurrentProjectTodos)
    newTodoButton.addEventListener('click', getTodoFields);
    newProjectButton.addEventListener('click', makeNewProject);
    
    return { todo, proj, dom, updateCurrentProject, makeNewTodo, removeFromCurrentProject, editTodo };
    
})();

export { controller };