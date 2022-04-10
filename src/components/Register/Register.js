import React, {useState}from 'react'
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"
import RegisterForm from "./RegisterForm"
import {Button} from  "@material-ui/core";

function Register() {
    const [count, setCount] = useState(false);
    const style = {
        content: {
            border:  "2px solid #ccc",
            overflow: "hidden",
            borderRadius: '4px',
            bottom: 'auto',
            height:"15rem",
            minHeight: '10rem',
            left: '50%',
            padding: '2rem',
            position: 'fixed',
            right: 'auto',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            minWidth: '20rem',
            width: '80%',
            maxWidth: '60rem'
          }
      };

    return (
        <div>
             <div className="register-button">
            <Button  onClick={()=>setCount(true)} type="submit">
                    Kayıt Ol
                </Button>
            </div>
            
                {
                    count ? <Modal isOpen="true" style={style} onRequestClose={()=>setCount(false)}>
                        <Zoom>
                            <button className="close-modal" onClick={()=>setCount(false)} >X</button>
                            <RegisterForm/>
                        </Zoom>
                    </Modal>:<div></div>
                }
        </div>
    )
}

export default Register
