import React, { Component } from 'react'
import { Route } from "react-router-dom";

export default class Homess extends Component {
    render() {
        return (
            <div>
               (<Route exact path="/" render={() => (window.location = "http://lotec.com.tr/")} />)
            </div>
        )
    }
}
