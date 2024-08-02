export default function domManip() {

    const content = document.querySelector("#content");
    const sidebar = document.querySelector("#sidebar");
    const display = document.querySelector("#display");

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

    return { createTodo, appendTodo, fillOutTodo };

}