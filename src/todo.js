
export default function toDo() {

    const create = function(title, description, duedate, priority) {

        const get = function() {
            return { title, description, duedate, priority, completed };
        }

        const updateDescription = function(newDescription) {
            this.description = newDescription;
        }

        const updateTitle = function(newTitle) {
            this.title = newTitle;
        }

        const updateDueDate = function(newDueDate) {
            this.duedate = newDueDate;
        }

        const updatePriority = function(newPriority) {
            this.priority = newPriority;
        }

        return { title, description, duedate, priority, get,
                updateDescription, updateTitle, updateDueDate, updatePriority};

    }

    return { create };

}