import {SAVELOGIN,SAVEPROFILE} from "../constant";

export const saveLogin = (data)=>{ // this is a no name function assinged to varriable addToCart
    //console.log("Data",data)
    return{
        type: SAVELOGIN,
        data:data
    }
}
export const saveProfile = (data)=>{ // this is a no name function assinged to varriable addToCart
    //console.log(data)
    return{
        type: SAVEPROFILE,
        data:data
    }
}

