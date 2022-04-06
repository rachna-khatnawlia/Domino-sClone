// import userStatus from "./auth";
// import { combineReducers } from "redux";


// const rootReducer = combineReducers({
//     userStatus
// });

// export default rootReducer;


import { combineReducers } from "redux";
import userStatus from "./auth";

const rootReducer = combineReducers({
    userStatus
});

export default rootReducer;