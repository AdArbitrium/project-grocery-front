import actions from "../actions";



export function setGrocery(value){
    return{
        type: actions.setGrocery,
        payload:value
    }
}