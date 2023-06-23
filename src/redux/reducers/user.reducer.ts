import {types} from "../types";

const initialState = {
    name: "",
    email:""
}


export const userReducer = (state=initialState, action:any)=>{
    switch (action.type) {
        case types.set_user:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            };
        case types.clear_user:
            return initialState;

        default:
            return state;
    }

}
