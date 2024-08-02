export default function project() {

    let project = {}

    function create(name) {
        project.name = name;
        project.todos = new Array();
    }

    function get() {
        return project;
    }

    function updateToDos(todo) {
        project.todos.push(todo);
    }

    function remove() {
        project = {};
    }

}