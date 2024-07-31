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

    const toDoList = [];

    const defaultProject = proj.getProject(proj.createProject('name'));

    const allProjects = [defaultProject];

    console.log("Here's my empty default project");
    console.log(defaultProject);
    console.log("Here's my array of projects:");
    console.log(allProjects);

    function getTaskFields() {
        let title = prompt("What would you like to name your task?");
        let description = prompt("What would you like the task description to be?");
        let duedate = prompt("When is this task due? Please format your answer as DD/MM/YYYY");
        let priority = prompt("Is this task high priority, or low? Please respond with either 'high' or 'low'").toLowerCase();

        return { title, description, duedate, priority };
    }

    function selectProject() {
        let projectSelection = prompt(
                                "Would you like to add this task to the default project? Please input 'y' if yes, and 'n' if no");
        return projectSelection;
    }

    function determineIfAddingToDefault(todo, projectSelection) {

        if (projectSelection === 'y') {
            proj.addToProject(defaultProject, todo);
            console.log(allProjects);
        }

        else {
            let projectToAddTo = getProjectToAddTo();
            findProjectToAddTo(todo, projectToAddTo);
            console.log(allProjects);

        }
    }

    function getProjectToAddTo() {
        let projectToAddTo = prompt("Please enter the name of the project you'd like to add your task to:");
        return projectToAddTo
    }

    function findProjectToAddTo(todo, projectToAddTo) {
        for (const project of allProjects) {
            if (project.name === projectToAddTo) {
                proj.addToProject(project, todo);
                return;
            }
        }
        let answer = prompt("That project doesn't yet exist. Would you like to make a project with that name and add this task to it? Please input 'y' if yes, and 'n' if no.");
        if (answer === 'y') {
            let newProject = proj.getProject(proj.createProject(projectToAddTo));
            proj.addToProject(newProject, todo);
            allProjects.push(newProject);
        }
    }

    function runinConsole() {
        let todo = getTaskFields();
        let project = selectProject();

        determineIfAddingToDefault(todo, project);

    }

    runinConsole();

    return { toDoList, allProjects, todo, proj, defaultProject };
    
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