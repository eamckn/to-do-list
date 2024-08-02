export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

    function getUserInput() {
        let title = prompt("What would you like to title your todo?");
        let description = prompt("What's the description for this todo?");
        let duedate = prompt("When is this due?");
        let priority = prompt("Is this high or low priority?");

        return { title, description, duedate, priority };
    }

    function createTodo() {

        let todoCard = document.createElement("div");
        todoCard.className = "todo";

        return todoCard;
    }

    function appendTodo(todoCard) {
        display.appendChild(todoCard);
    }

    function fillOutTodo(todo, todoCard) {

        for (const prop in todo) {
            todoCard.innerHTML += `${prop}: ${todo[prop]} `;
        }

    }

    return { createTodo, appendTodo, fillOutTodo, getUserInput };

}