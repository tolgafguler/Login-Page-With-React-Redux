const INITIAL_STATE = {
    email:'',
    Loggedİn : false,
    loginError : false
};

export default (state = INITIAL_STATE ,action) => {
    if(action.type === 'LOGIN'){
        return {email : action.payload.email,
                Loggedİn : true,
                loginError : false}
    }
    else if(action.type === 'LOGIN_ERROR'){
        return {email : '',
                Loggedİn : false,
                loginError : true}
    }
    return state;
}