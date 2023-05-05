//this is root reducer file, which is used to combine all reduers. 
//Creating this file is not mandatatory, we can directly use reducers file

import {combineReducers} from "redux";
//combiner reducers.



import cartItem  from "./reducer";

// cart item funtion is from reducer, we will merger reducer to root reducer and then
// store it to store.

// now lets use combined ruducer.

const rootReducer = combineReducers({
    data : cartItem, // value of cartIitem assigned to data variable.
                    //but we can directly use cartItem
});

export default rootReducer;