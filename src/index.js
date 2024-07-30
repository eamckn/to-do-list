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

let toDoList = [];
let defaultproject = [];

function controller() {

    const todo = toDo();

    const project = project();
    
}

toDoList.push(ToDo("Call mom", "Call my mom. I miss her.", "12/2", "high"));

console.log(toDoList[0]);
changePriority(toDoList[0]);
console.log(toDoList[0]);
markComplete(toDoList[0]);
console.log(toDoList[0]);