import PropTypes from "prop-types";
import "./TaskList.css";

function TaskList({ tasks, onMarkAsDone, onDelete }) {
    return (
        <div className="sticky-notes-task-item">
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        <b>Title : </b>{task.task}
                    </p>
                    <p><b>Note :</b> {task.description}</p>
                    <div className="btns">
                        <button onClick={() => onMarkAsDone(index)}>
                            {task.completed ? "Unmark" : "Mark as Done"}
                            {/* {task.completed ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-check"></i>)} */}
                        </button>
                        <button onClick={() => onDelete(index)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onMarkAsDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TaskList;
