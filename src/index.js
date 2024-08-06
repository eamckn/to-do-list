import './style.css';
import toDo from './todo.js';
import project from './project.js';
import domManip from './dom.js';

const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const display = document.querySelector("#display");

const newTodoButton = document.querySelector("#create-todo");
const newProjectButton = document.querySelector("#create-project");
const allTodosButton = document.querySelector("#all-todos");

const controller = (function() {

    const todo = toDo();

    const proj = project();

    const dom = domManip();

    const defaultProject = proj.create('Default');

    const allProjects = [defaultProject];

    let currentProject = defaultProject;

    // Create a new todo
    let defaultTodo = todo.create("First ever task", "Here's my description. It's really really long. I made it this long to test out how descriptions will wrap.", "Tomorrow", "low");
    // Add them to the default project
    defaultProject.addTodo(defaultTodo);

    function displayAllProjects() {
        for (const item of allProjects) {
            dom.displayNewProject(item);
        }
    }

    function displayCurrentProjectTodos() {
        for (const item of currentProject.todos) {
            dom.showTodoinDisplay(item);
        }
    }

    function makeNewTodo(todoFromModal) {
        let newTodo = todo.create(todoFromModal.title, todoFromModal.description, todoFromModal.duedate, todoFromModal.priority);
        currentProject.addTodo(newTodo);
        populateStorageWithProject(currentProject);
        dom.showTodoinDisplay(newTodo);
    }

    function editTodo(todo, todoFromModal) {
        for (const item of currentProject.todos) {
            if (item.title === todo.title) {
                item.updateTitle(todoFromModal.title);
                item.updateDescription(todoFromModal.description);
                item.updateDueDate(todoFromModal.duedate);
                item.updatePriority(todoFromModal.priority);
                populateStorageWithProject(currentProject);
                console.log(item);
                console.log(currentProject.todos);
            }
        }
    }

    function getTodoFields() {
        dom.displayDialogForInput();
    }

    function makeNewProject(name) {
        if (name) {
            let newProject = proj.create(name);
            allProjects.push(newProject);
            populateStorageWithProject(newProject);
            dom.displayNewProject(newProject);
            //console.log(newProject);
            //console.log(allProjects);
        }
    }

    function getProjectName() {
        dom.displayDialogForProject();
    }

    function updateCurrentProject(project) {
        currentProject = project;
        console.log(currentProject);
    }

    function removeFromCurrentProject(todo) {
        currentProject.removeTodo(todo);
        populateStorageWithProject(currentProject);
    }

    function displayEachTodo() {
        for (const project of allProjects) {
            for (const todo of project.todos) {
                dom.showTodoinDisplay(todo);
            }
        }
    }

    function displayCurrentProject() {
        dom.showCurrentProjectInDisplay(currentProject);
    }

    function populateStorageWithProject(project) {
        localStorage.setItem(`${project.name}`, JSON.stringify(project));
    }

    document.addEventListener('DOMContentLoaded', displayAllProjects)
    document.addEventListener('DOMContentLoaded', displayCurrentProjectTodos)
    document.addEventListener('DOMContentLoaded', displayCurrentProject());
    newTodoButton.addEventListener('click', getTodoFields);
    newProjectButton.addEventListener('click', getProjectName);
    allTodosButton.addEventListener('click', function() {
        dom.clearDisplay();
        displayEachTodo();
        dom.showViewingAllTodos();
    });
    
    return { todo, proj, dom, updateCurrentProject, makeNewTodo,
            removeFromCurrentProject, editTodo, makeNewProject };
    
})();

export { controller };