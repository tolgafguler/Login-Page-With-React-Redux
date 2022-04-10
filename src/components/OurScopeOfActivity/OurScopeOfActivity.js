import React, { Component } from 'react'
import { Route } from "react-router-dom";

export default class OurScopeOfActivity extends Component {
    render() {
        return (
            <div>
               (<Route exact path="/" render={() => (window.location = "http://lotec.com.tr/en/our-scope-of-activity/")} />)
            </div>
        )
    }
}
