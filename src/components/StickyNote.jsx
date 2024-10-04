import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function StickyNote() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setFormData(JSON.parse(storedTasks));
        }
    }, []);

    const handleOnSubmit = (task) => {
        const newTasks = [...formData, { ...task, completed: false }];
        setFormData(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const markAsDone = (index) => {
        const updatedTasks = formData.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setFormData(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const deleteTask = (index) => {
        const updatedTasks = formData.filter((_, i) => i !== index);
        setFormData(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <>
            <div className="sticky-Notes-main">
                <TaskForm onSubmit={handleOnSubmit} />
                <TaskList tasks={formData} onMarkAsDone={markAsDone} onDelete={deleteTask} />
            </div>
        </>
    );
}

export default StickyNote;
