import DelElementInArrByIndex from "./DelElementInArrByIndex";
import SwitchToglerEl from "./SwitchToglerEl";

const controlToDo = (state, action) =>{
    switch (action.type) {
        case "addToDo":
            return {todo: [...state.todo,{id: new Date() ,nameTask: action.nameTask, status: false}]}

        case "DelToDo":
            return {todo: DelElementInArrByIndex(state.todo,action.id)};

        case "TogglerToDo":
            return {todo: SwitchToglerEl(state.todo,action.id)};  

        default:
            alert("Qi меньше нуля?");
            break;
    }
}

export default controlToDo;