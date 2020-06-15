import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Student from '../pages/Student';
import Module from '../pages/module';
import FilesList from '../pages/files';
import TasksTest from '../pages/tasks';
import Filieres from '../pages/Filieres';
import ScreenShare from "../pages/ScreenShare"

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
            <Route path="/tasks">
            <TasksTest/>
            </Route>
            <Route path="/filieres">
            <Filieres/>
            </Route>
            <Route path="/screenShare">
              <ScreenShare/>
            </Route>
        </Switch>
    )
}

export default Routes
