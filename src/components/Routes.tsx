import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Student from '../pages/Student';
import Module from '../pages/module';
import FilesList from '../pages/files';
function Routes() {
    return (
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/Student">
            <Student></Student>
            </Route>
            <Route path="/module">
            <Module></Module>
            </Route>
            <Route path="/fileSharing">
            <FilesList></FilesList>
            </Route>
        </Switch>
    )
}

export default Routes
