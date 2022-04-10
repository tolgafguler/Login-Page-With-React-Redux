import React from 'react' ;
import { useState } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Features from '../Features/Features';
import Homess from '../Homess/Homess';
import OurScopeOfActivity from '../OurScopeOfActivity/OurScopeOfActivity';


const Navbar = () => {
   
    const [showHome, setShowHome] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showOurScopeOfActivity, setShowOurScopeOfActivity] = useState(false);
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    
    const home = () =>{
        setShowHome(!showHome);
    }
    const features = () =>{
        setShowFeatures(!showFeatures);
    }
    const ourscopeofactivity = () =>{
        setShowOurScopeOfActivity(!showOurScopeOfActivity);
    }
    const dropdownmenu =() => {
        setShowDropDownMenu(!showDropDownMenu);
    }
    return (
        <div>
        <header1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div  className="container-fluid">
                <a className="navbar-brand" style= {{padding:'10px',color:'white',backgroundColor:'rgb(196, 21, 21)',border:'12px solid rgb(196, 21, 21)',width:'%100'}}href="#">LOTEC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a onClick={home} className="nav-link active" style= {{padding:'10px',color:'white',backgroundColor:'rgb(196, 21, 21)',border:'12px solid rgb(196, 21, 21)',width:'%100'}} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={features} className="nav-link" style= {{padding:'10px',color:'white',backgroundColor:'rgb(196, 21, 21)',border:'12px solid rgb(196, 21, 21)',width:'%100'}}href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={ourscopeofactivity} className="nav-link" style= {{padding:'10px',color:'white',backgroundColor:'rgb(196, 21, 21)',border:'12px solid rgb(196, 21, 21)',width:'%100'}} href="#">Our Scope Of Activity</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style= {{padding:'10px',color:'white',backgroundColor:'rgb(196, 21, 21)',border:'12px solid rgb(196, 21, 21)',width:'%100'}}href="#" id="navbarDropdownMenuLink" role="button" onClick={dropdownmenu} data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" aria-expanded="true">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header1>     
        {showHome ? <div><Homess/></div> : <div></div>}
        {showFeatures ? <div><Features/></div> : <div></div>}
        {showOurScopeOfActivity ? <div><OurScopeOfActivity/></div> : <div></div>}
        {showDropDownMenu ? <div><DropDownMenu/></div>: <div></div>}
        </div>
    )
}

export default Navbar
