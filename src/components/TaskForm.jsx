import { useState } from "react";
import PropTypes from "prop-types";
import "./TaskForm.css";

function TaskForm({ onSubmit }) {
    const [task, setTask] = useState({
        task: "",
        description: ""
    });

    const handleInputOnChange = (event) => {
        const { name, value } = event.target;
        setTask((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSubmit(task);
        setTask({
            task: "",
            description: ""
        });
    };

    return (
        <div className="sticky-notes-form">
            <form onSubmit={handleOnSubmit} className="form">
                <div>
                    <input
                        type="text"
                        placeholder="Add a task"
                        name="task"
                        value={task.task}
                        onChange={handleInputOnChange}
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Take a note..."
                        cols={35}
                        rows={10}
                        name="description"
                        value={task.description}
                        onChange={handleInputOnChange}
                    />
                </div>
                <div>
                    <button type="submit" className="btn">Add task</button>
                </div>
            </form>
        </div>
    );
}

// Add prop validation
TaskForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
