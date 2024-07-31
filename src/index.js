import './style.css';
import toDo from './todo.js';
import project from './project.js';

//alert("It's working");

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

    const defaultProject = proj.getProject(proj.createProject('name'));

    const allProjects = [defaultProject];

    return { allProjects, todo, proj, defaultProject };
    
})();

//console.log(controller.defaultProject);

/*
let defaultProject = controller.proj.getProject(controller.proj.createProject("Default"));
console.log(defaultProject);
let exampleTask = controller.todo.create("Call mom", "Call my mom. I miss her.", "12/2", "high");
controller.proj.addToProject(defaultProject, exampleTask);
console.log(defaultProject);
*/

/* Further testing for core functionality of adding and updating
- Create a project
- Create a task
- Add task to that project

*/

/* Let's make this work in the console

    - On load, as someone to create a task
    - One input for name, description, due date, and priority
    - Ask them if they'd like to add it to the project currently open, or another

*/