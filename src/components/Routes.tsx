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
import FiliereListStudent from '../pages/FiliereListStudent';
function Routes() {
    return (
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/students/:courseId">
            <Student/>
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
            <Route exact path="/module/:courseId">
            <Module/>
            </Route>
            <Route path="/module/:courseId/screenShare">
              <ScreenShare/>
              </Route>
              <Route exact path="/StudentsFiliere">
              <FiliereListStudent/>
              </Route>
        </Switch>
    )
}

export default Routes
