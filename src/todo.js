//import project from './project.js'

export default function toDo() {

    //let proj = project();

    const create = function(title, description, duedate, priority) {

        let checked = false;

        const get = function() {
            return { title, description, duedate, priority, checked };
        }

        const updateDescription = function(newDescription) {
            description = newDescription;
        }

        const getTitle = function() {
            return title;
        }

        return { title, description, duedate, priority, get, updateDescription, getTitle};

    }

    return { create };

}