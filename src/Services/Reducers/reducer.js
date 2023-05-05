import { SAVELOGIN,SAVEPROFILE } from "../constant";

const initialState = {
    loginData: [],
    profileData: [],
}
export default function saveLogin(state = initialState, action){
    switch(action.type){
        case SAVELOGIN:
            return{
                ...state, loginData :action.data
            }
            
        case SAVEPROFILE:
            return{
                ...state, profileData :action.data
            }
        default:
            return state;
    }

}
console.log(initialState)