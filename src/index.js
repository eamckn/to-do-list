import './style.css';
import toDo from './todo.js';
import project from './project.js';
import domManip from './dom.js';

/* Project brainstorm

- I want each to-do item to have a title, description, duedate, and priority listing.
- I want the creation of each to-do to be a factory that returns an object with those values.
- I also want a separate function to handle creating each item.
- I want to first start with making sure that my objects are being created appropriately
- I'm going to first create the factory that will create and return to-dos, as well as the
factory that will call the create to-do function

*/

const content = document.querySelector("#content");
const sidebar = document.querySelector("#sidebar");
const display = document.querySelector("#display");


const controller = (function() {

    const todo = toDo();

    const proj = project();

    const dom = domManip();

    const defaultProject = proj.create('Default');

    const allProjects = [defaultProject];

    let currentProject = defaultProject;

    // Console logs for testing
    // Create 2 new todos
    let newTodo = todo.create("Clean room", "It's messy.", "Tomorrow", "high");
    let otherTodo = todo.create("Call mom", "You need to talk about your plane ticket.", "Tomorrow", "high");
    console.log(newTodo.get());
    console.log(otherTodo.get());
    // Add them to the default project
    defaultProject.addTodo(newTodo);
    defaultProject.addTodo(otherTodo);
    console.log(defaultProject.get());
    // Create new project
    const personalTasks = proj.create("Personal tasks");
    allProjects.push(personalTasks);
    console.log(personalTasks.get());
    // Remove todos from default
    defaultProject.removeTodo(newTodo);
    console.log(defaultProject.get());
    // Set todos as complete
    personalTasks.addTodo(newTodo);
    console.log(personalTasks.get())
    console.log(newTodo.get());
    newTodo.changeCompletedStatus();
    console.log(newTodo.get());

    console.log(currentProject.todos);

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

    document.addEventListener('DOMContentLoaded', displayAllProjects)
    document.addEventListener('DOMContentLoaded', displayCurrentProjectTodos)
    
    return { todo, proj, dom };
    
})();