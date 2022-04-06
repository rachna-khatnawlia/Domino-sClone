import types from "../types";

const initialState = true;

const userStatus = (state = initialState, action) =>{
    switch(action.type){
        case types.LOGIN : return state = false;
        case types.USER_LOGOUT : return state = true;
        default : return state;
    }
}

export default userStatus