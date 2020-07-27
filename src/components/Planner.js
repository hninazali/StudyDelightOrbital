import React, {Component} from "react";
import TaskList from "./TaskList";
import { connect } from "react-redux"; //connect with reducers
//import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ListContainer = styled.div`
    display : flex;
    flex-direction : row;
`;

class Planner extends Component {
    onDragEnd = (result) => {
        //to do reordering logic, when this is empty, the tile will go back to initial state when drag ends
        const { destination, source, draggableID } = result;

        if(!destination) {
            return; //don't do anything if we make it land outside the list container
        }

        this.props.dispatch(
            sort (
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableID
            )
        );

    };

    render() {
        const { lists, auth } = this.props; //receive the list
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <DragDropContext onDragEnd = { this.onDragEnd }>
                <div className="App" style = {divStyle}>
                    {/* <h2 style = {styles.headLine}> ~  Study Delight  ~ </h2> */}
                    <ListContainer>
                        { lists.map(list => ( //when u use map,u need to pass the list id
                            <TaskList
                                listID = {list.id}
                                key = {list.id}
                                title = {list.title}
                                cards = {list.cards} />
                        ))}
                        {/* <ActionButton list /> */}
                    </ListContainer>
                    <h2 style = {styles.message}> Remember to have meals regularly even while doing work! </h2>
                </div>
            </DragDropContext>

        );
    }
}

const styles = {
    headLine:{
        fontWeight: 'bold',
        fontSize: 35,
        fontStyle: 'italic',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        height: 50,
        width: 2100
    },

    message:{
        position : 'absolute',
        bottom : -15.0,
        left : 8,
        right : 12,
        color : 'pink',
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'gray',
        opacity : 0.8,
        textAlign: 'center',

    }
}

const divStyle = {
    color : 'dark gray',
    overflowX : 'auto',
    marginLeft : 8,
    marginRight : 8
}

//mapping & connecting to reducers
const mapStateToProps = (state) => {
    return {
        lists: state.lists,
        auth: state.firebase.auth
    }
}

export default connect (mapStateToProps) (Planner);
