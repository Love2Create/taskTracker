import React from "react";

import TaskCard from "./TaskCard";

import "./TaskColumn.css";

const TaskColumn = (props) => {
    return (
        <section className='task_column'>
            <h2 className="task_column_heading"><img className="task_column_icon" src={props.icon}></img>{props.columnHeader}</h2>
            <TaskCard />
        </section>
    )
};

export default TaskColumn;