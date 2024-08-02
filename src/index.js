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


const controller = (function() {

    const todo = toDo();

    const proj = project();

    const dom = domManip();

    const defaultProject = proj.getProject(proj.createProject('name'));

    const allProjects = [defaultProject];

    let currentProject = allProjects[0];

    const exampleTodo = todo.create("Ex. ToDo", "Desc", "1/1/0000", "high");

    function addNewToDo() {
        console.log(currentProject);
        // Normally this will pull up dialog to input fields
        // Function for that goes here
        let newTodoDiv = dom.createTodo();
        let newTodo = todo.getUserInput();
        console.log(newTodo);
        // Add new todo to current project
        proj.addToProject(currentProject, newTodo);
        console.log(currentProject);
        dom.fillOutTodo(newTodo, newTodoDiv);
        dom.appendTodo(newTodoDiv);
    }

    return { allProjects, todo, proj, defaultProject, addNewToDo };
    
})();

    const newTaskButton = document.querySelector("#create-todo");

    newTaskButton.addEventListener('click', controller.addNewToDo);

/* Further implementation steps:

 - Ensure that created todos are added to the currently selected project
    - Add the created todo to the current project
- Create button to create new projects

*/