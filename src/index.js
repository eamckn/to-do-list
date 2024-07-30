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

    const toDoList = [];

    const allProjects = [];

    const todo = toDo();

    const proj = project();

    return { toDoList, allProjects, todo, proj };
    
})();

let exampleTask = controller.todo.create("Call mom", "Call my mom. I miss her.", "12/2", "high");


// console logs for testing core functionality of adding and updating
controller.toDoList.push(exampleTask);
console.log(controller.toDoList[0]);
controller.todo.changePriority(controller.toDoList[0]);
console.log(controller.toDoList[0]);
controller.todo.markComplete(controller.toDoList[0]);
console.log(controller.toDoList[0]);

let exampleProject = controller.proj.getProject(controller.proj.createProject("Home maintenance"));
controller.allProjects.push(exampleProject);
console.log(controller.allProjects);