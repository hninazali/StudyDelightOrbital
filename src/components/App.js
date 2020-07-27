import React, {Component} from "react";
/*
import TaskList from "./TaskList";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
 */
import Planner from './Planner';
import Navbar from './layout/Navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import firebase from '../config/fbConfig'

class App extends Component {
    render() {

        return (
                <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route exact path='/' component={Planner} />
                    </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

/*
export default connect (mapStateToProps) (App);
 */
export default App;