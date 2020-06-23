import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import Student from './Student';
import Module from './module';
import FilesList from './files';
import TasksTest from './tasks';
import Settings from './settings';
import StudentTask from './StudentTask';
import Filieres from './Filieres';
import ScreenShare from "./ScreenShare"
import FiliereListStudent from './FiliereListStudent';
function Routes() {
    return (
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/students/:courseId">
            <Student/>
            </Route>
            
           
            <Route path="/settings">
            <Settings></Settings>
            </Route>
          
            <Route exact path="/filieres">
            <Filieres/>
            </Route>
            <Route exact path="/filieres/:filierId/studentsList">
              <FiliereListStudent/>
            </Route>
            <Route exact path="/module/:courseId">
            <Module/>
            </Route>
            <Route path="/module/:courseId/screenShare">
              <ScreenShare/>
            </Route>
            <Route path="/module/:courseId/fileSharing">
              <FilesList/>
            </Route>
            <Route exact path="/module/:courseId/tasks">
            <TasksTest/>
            </Route>
            <Route path="/module/:courseId/tasks/:taskId/StudentTask">
            <StudentTask/>
            </Route>
        </Switch>
    )
}

export default Routes
