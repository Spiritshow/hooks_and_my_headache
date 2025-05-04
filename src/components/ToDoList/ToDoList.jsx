import React, { useReducer, useRef } from "react";
import controlToDo from "./helper/ControlToDo";
import Task from "./components/Task";

//state = [{id: 15, nameTask: "wsdfghbjnm", status: true},{id: 16,nameTask: "рола", status: false},{}]
const initialState = {todo: []};

const TodoList = () => {

    const [state, dispatch] = useReducer(controlToDo, initialState);
    const valueRef = useRef(null);

    const handleClick = () => {
        dispatch({type: "addToDo", nameTask: valueRef.current.value});
        valueRef.current.value = "";
    }

    const ListElements = (prop) => {  //посмотреть
        console.log("prop ",prop);
        return prop.map(e =>(
            <Task key={e.id} prop ={{task: e, dispatch: dispatch}}/>
        ))
    }

    return(
        <>
            <div>
                <input ref={valueRef} type="text"></input>
                <button onClick={handleClick}> Добавить задачу</button>
            </div>

            <ol>
                {state && ListElements(state.todo)}
            </ol>
        </>
    )

}

export default TodoList;