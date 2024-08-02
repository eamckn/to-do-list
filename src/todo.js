// import project from './project.js'

export default function toDo() {

    function getUserInput() {
        let title = prompt("What would you like to title your todo?");
        let description = prompt("What's the description for this todo?");
        let duedate = prompt("When is this due?");
        let priority = prompt("Is this high or low priority?");

        return create(title, description, duedate, priority);
    }

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

    return { create, changePriority, changeDescription, markComplete, getUserInput };

}