

export default function project() {

    const create = function(name) {

        let todos = new Array();

        const get = function() {
            return { name, todos }
        }

        const addTodo = function(todo) {
            this.todos.push(todo);
        }

        const removeTodo = function(todo) {
            let todoTitle = todo.title;

            let index = 0;
            for (const item of this.todos) {
                if (todoTitle === item.title) {
                    console.log(`Found todo to remove in project ${get().name}`);
                    this.todos.splice(index, 1);
                    return;
                }
                else index++;
            }
        }

        return { name, todos, get, addTodo, removeTodo };

    }

    return { create };

}