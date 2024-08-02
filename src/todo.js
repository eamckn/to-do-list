//import project from './project.js'

export default function toDo() {

    let todo = {}

    let proj = project();

    function create(title, description, duedate, priority) {
        todo.title = title;
        todo.description = description;
        todo.duedate = duedate;
        todo.priority = priority;
        todo.checked = false;
    }

    function updateDescription(newDescription) {
        todo.description = newDescription;
    }

    function updateChecked() {
        todo.checked = todo.checked === false ? true : false;
    }

    function get() {
        return todo;
    }

    function remove() {
        todo = {};
    }

    return { create, updateDescription, updateChecked, get, remove};

}