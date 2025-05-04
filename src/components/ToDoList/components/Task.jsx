import React from "react";

const Task = ({prop}) => {
    const handleClickToggle = () => {
        prop.dispatch({type: "TogglerToDo", id: prop.task.id});
    } 

    const handleClickDel = () => {
        prop.dispatch({type: "DelToDo", id: prop.task.id})
    }

    return(
        <div>
            <h2>{prop.task.nameTask}</h2>
            <button onClick={handleClickToggle}>{prop.task.status ? "выполнено" : "не выполнено"}</button>
            <button onClick={handleClickDel}>Удалить</button>
        </div>
    )
}

export default Task;