import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Student from '../pages/Student';
import Module from '../pages/module';
import FilesList from '../pages/files';
import TasksTest from '../pages/tasks';
import Settings from '../pages/settings';
import StudentTask from '../pages/StudentTask';
import Filieres from '../pages/Filieres';
import ScreenShare from "../pages/ScreenShare"
function Routes() {
    return (
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/Student">
            <Student/>
            </Route>
            <Route path="/module">
            <Module/>
            </Route>
            <Route path="/fileSharing">
            <FilesList/>
            </Route>
            <Route path="/tasks">
            <TasksTest/>
            </Route>
            <Route path="/settings">
            <Settings></Settings>
            </Route>
            <Route path="/StudentTask">
            <StudentTask/>
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
