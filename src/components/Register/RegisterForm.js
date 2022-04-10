import React,{useState}  from 'react';
import { Formik} from 'formik';
import {TextField, Button} from  "@material-ui/core";
import "./register.css";
import fire from "../../config/file"


function RegisterForm() {
    const [registerError, setRegisterError] = useState(false);
    const [registerResponse, setRegisterResponse] = useState(false);
    
    return (
        <div className="form-container">
            <h2>Kayıt Ol</h2>
            
             <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                    return errors;
                }}
                onSubmit={(data,{setSubmitting})=>{
                    setSubmitting(true);
                      fire.auth().createUserWithEmailAndPassword(data.email,data.password)
                      .then((setRegisterResponse)=>{
                        setRegisterResponse(true);
                        setRegisterError(false);
                      }).catch((setRegisterError)=>{ 
                        setRegisterError(true);
                        setRegisterResponse(false);
                      })
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
           
           {registerError ? <div><p>kullanıcı zaten kayıtlı</p></div>:
           <span></span>
                }
           {registerResponse ? <div><p>başarılı kayıt</p></div>:
           <span></span>
                }

           <div className="register-button">
                <Button type="submit" disabled={isSubmitting}>
                    Kayıt Ol
                </Button>
           </div>

         </form>
       )}
            </Formik>

        </div>
    )
}

export default RegisterForm
