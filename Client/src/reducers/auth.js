import { LOGIN, REGISTER } from "../constants";

export default ((state={authData: null, isLogin: false}, action)=>{
    switch(action.type){
        case LOGIN:
            console.log(action.data);
            return { ...state, authData: action.data, isLogin: true};
        case REGISTER:
            console.log(action.data);
            return {...state,  authData: action.data, isLogin: true};
        default:
            return state;
    }
})