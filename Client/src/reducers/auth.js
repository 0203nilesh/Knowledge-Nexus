import { LOGIN, LOGOUT, REGISTER } from "../constants";

export default ((state={authData: null, isLogin: false}, action)=>{
    switch(action.type){
        case LOGIN:
            localStorage.setItem("user", JSON.stringify({data: action.data, isLogin: true}));
            console.log(action.data);
            return { ...state, authData: action.data, isLogin: true};
        case REGISTER:
            localStorage.setItem("user", JSON.stringify({data: action.data, isLogin: true}));
            console.log(action.data);
            return {...state,  authData: action.data, isLogin: true};
        case LOGOUT:
            localStorage.clear();
            console.log(action.data);
            return {...state,  authData: action.data, isLogin: false};
        default:
            return state;
    }
})