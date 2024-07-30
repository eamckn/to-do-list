import './style.css';

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
let project = [];

function controller() {

    function ToDo(title, description, duedate, priority) {
        title = title;
        description = description;
        duedate = duedate;
        priority = priority;
    
        let completed = false;
    
        return { title, description, duedate, priority, completed };
    }
    
    function changePriority(todo) {
        todo.priority = todo.priority === "high" ? "low" : "high";
    }
    
    function markComplete(todo) {
        todo.completed = true;
    }

    function addToProject(project, todo) {
        project.push(todo);
    }

    function newProject() {
        return new Array;
    }

    function nameProject(name) {
        name = newProject();
        return name;
    }
    
}

toDoList.push(ToDo("Call mom", "Call my mom. I miss her.", "12/2", "high"));

console.log(toDoList[0]);
changePriority(toDoList[0]);
console.log(toDoList[0]);
markComplete(toDoList[0]);
console.log(toDoList[0]);