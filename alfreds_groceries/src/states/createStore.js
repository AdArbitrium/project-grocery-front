import { createStore as reduxCreateStore } from "redux"
import actions from "./actions"

const reducer = (state, action) => {

    switch(action.type){
        
        case actions.setGrocery:
            return{
                ...state,
                groceries: {
                    itemName: action.payload.itemName,
                    itemExpiration: action.payload.itemExpiration,
                    itemAmount: action.payload.itemAmount,
                }
            }
        }

    return state
}


const initialState = {
    groceries:{
        itemName:"",
        itemExpiration:"",
        itemAmount:"",
    },

}


const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore