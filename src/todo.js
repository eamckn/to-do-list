// import project from './project.js'

export default function toDo() {

    function create(title, description, duedate, priority) {
    
        let completed = false;
    
        return { title, description, duedate, priority, completed };
    }
    
    function changePriority(todo) {
        todo.priority = todo.priority === "high" ? "low" : "high";
    }

    function changeDescription(todo, newDescription) {
        todo.description = newDescription;
    }
    
    function markComplete(todo) {
        todo.completed = true;
    }

    return { create, changePriority, changeDescription, markComplete };

}