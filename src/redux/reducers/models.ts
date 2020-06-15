import { Action } from "../types";
import { FETCH_ALL, ADD_ONE, DELETE_ONE } from "../actions/models";


export default (state:any = {}, action : Action ) =>{
    const {type, payload} = action
    switch(type){
        case FETCH_ALL:
            return {
                ...state,
                [payload.model]: payload.data
            }
        case ADD_ONE:
            return {
                ...state,
                [payload.model]:[ ...state[payload.model],payload.data]
            }
        case DELETE_ONE:
            return {...state,[payload.model]:state[payload.model]?.filter((m:any) => m.id != payload.id )}
        default : 
        return state
    }
}