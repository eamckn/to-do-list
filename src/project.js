export default function project() {

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