export default function project() {

    let project = {};

    function createProject(name) {
        project.name = name;
        project.tasks = new Array();
    }

    function addToProject(todo) {
        project.tasks.push(todo);
    }

    function getProject() {
        return project;
    }

    /* a project is an object that holds a project name and an array
    of task objects*/

    return { createProject, addToProject, getProject }
}