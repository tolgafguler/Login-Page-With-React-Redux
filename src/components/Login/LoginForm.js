import React from 'react';
import { Formik} from 'formik';
import {TextField, Button} from  "@material-ui/core";
import "./login.css";
import Home from '../Home/Home';
import Register from '../Register/Register';
import {connect} from 'react-redux';
import {login} from '../../actions';



function LoginForm(props) {
    console.log(props,"dd");
    const {Loggedİn} = props.auth;
    const {loginError} = props.auth;
    let {isLoggedIn} = props.loggedIn;

    if(Loggedİn==true){
        props.setLoggedIn(true);
    }
    return (
        <div>
            {Loggedİn ? <Home/> : <div> <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => 
                    {
                    const errors = {};
                    if (!values.email)
                    {
                        errors.email = 'Zorunlu Alan';
                    } else if
                    (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) 
                    {
                    errors.email = 'Mail Adresinizi uygun formatta giriniz';
                    }
                    return errors;
                    }}
                onSubmit={(data,{setSubmitting})=>{
                    setSubmitting(true);
                
                    props.login(data.email,data.password);
                    
                    setSubmitting(false);
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,    
            /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>LOTEC</h2>
                </div>
                <div>
                    <TextField
                        type="email"
                        name="email"
                        placeholder="e-mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </div>
                <div>
                    {errors.email && touched.email && errors.email}
                </div>
                <div>
                    <TextField
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Şifre"
                    />
                </div>
                <div>
                    {errors.password && touched.password && errors.password}
                </div>
                {loginError ? <div>
                    <p>Mail Veya Şifre Hatalı</p>
                </div>:<span></span>
                }
                <div  className="login-button">
                        <Button type="submit" disabled={isSubmitting}>
                            Giriş Yap
                        </Button>
                </div>
                </form>
                )}
            </Formik>
            <Register/>
            </div>
            }
        </div>
    )
}


export default connect((state)=>({auth : state.auth}),{login})(LoginForm);
