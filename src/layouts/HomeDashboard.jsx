import React from 'react'
import Auth from './Auth'
import { Route } from "react-router-dom"

export default function HomeDashboard() {
    return (
        <div>
            <Route exact path="/" component={Auth}/>
            <Route exact path="/register" component={Auth}/>
            <Route exact path="/forget-password" component={Auth}/>
        </div>
    )
}
