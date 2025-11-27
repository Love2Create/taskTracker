import React, {useState} from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "to do",
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setTaskData(prev => {
            return({...prev, [name]: value})
        })
    }
    console.log(taskData)
    // const [task, setTask] = useState("");
    // const handleTaskChange = (e) => setTask(e.target.value);

    // const [status, setStatus] = useState("todo");
    // const handleStatusChange = (e) => setStatus(e.target.value);
    // console.log(task, status);

    return(
        <header className="app_header">
            <form>
                <input 
                    className="task_input" 
                    name="task"
                    type="text" 
                    placeholder="Enter your task"
                    onChange={handleChange}
                />
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName="HTML" />
                        <Tag tagName="CSS" />
                        <Tag tagName="JavaScript" />
                        <Tag tagName="React" />
                    </div>
                    <div>
                        <select
                            className="task_status"
                            name="status"
                            onChange={handleChange}
                        >
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>

                    <button type="submit" className="task_submit">+ Add Task</button>
                </div>
            </form>
        </header>
    )
};

export default TaskForm;