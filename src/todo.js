//import project from './project.js'

export default function toDo() {

    //let proj = project();

    const create = function(title, description, duedate, priority) {

        let completed = false;

        const get = function() {
            return { title, description, duedate, priority, completed };
        }

        const updateDescription = function(newDescription) {
            description = newDescription;
        }

        const getTitle = function() {
            return title;
        }

        const changeCompletedStatus = function() {
            completed = completed === false ? true : false;
        }

        return { title, description, duedate, priority, get, updateDescription, changeCompletedStatus};

    }

    return { create };

}