import fire from '../config/file';

export const login = (email,password) => {
    return async (dispatch) =>
    {
        console.log(email,password);
        //firebase sorgusu
        fire.auth().signInWithEmailAndPassword(email,password)
        .then((response)=>
        {   
            const _payload =
            {
                Loggedİn : true
            }

            dispatch({type:'LOGIN', payload:{...response.user,..._payload}});
        }).catch((error)=>
        {   
            const _payload =
            {
                Loggedİn : false,
                loginError : true
            }
            dispatch({type:'LOGIN_ERROR', payload: _payload});
        })

    } 
}  