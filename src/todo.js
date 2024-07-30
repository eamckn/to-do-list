export default function toDo() {

    function add(title, description, duedate, priority) {
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

    function changeDescription(todo, newDescription) {
        todo.description = newDescription;
    }
    
    function markComplete(todo) {
        todo.completed = true;
    }

}