import React from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard, deleteCard } from "../actions";
import firebase from '../config/fbConfig'

class ActionButton extends React.Component{

    state = {
        formOpen : false, //Form should open only when I click it so should be false at the start
        text : ""
    }

    openForm = () => {
        this.setState({
            formOpen : true
        });
    };

    closeForm = () => {
        this.setState({
            formOpen : false
            });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text){
            this.setState({ //do that the next time u click add, the previous text won't appear
                text: ""
            });
            dispatch(addCard(listID, text));
        }

    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another task"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColour = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(255,182,193,.85)" : "inherit";

        return (
            <div
                onClick = {this.openForm}
                style = {{
                ...styles.openFormButtonGroup,
                opacity : buttonTextOpacity,
                color : buttonTextColour,
                backgroundColor : buttonTextBackground}} >
                <Icon>add</Icon>
                <p> {buttonText} </p>
            </div>
        )
    }

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list
            ? "Enter list title..."
            : " Enter a title for this task...";

        const buttonTitle = list ? "Add List" : "Add Task";

        return <div>
            <Card style = {{
                overflow: "visible",
                minHeight: 80,
                minWidth: 230,
                padding: "6px 8px 2px"
            }}>
                <TextareaAutosize
                    placeholder = {placeholder}
                    autoFocus
                    onBlur = {this.closeForm}
                    value = {this.state.text}
                    onChange = {this.handleInputChange} //so that react will not always create a new instance of this function
                    style = {{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style = {styles.formButtonGroup}>
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard} //use this instead of onClick because it will go back to initial state after clicking
                    variant= "contained"
                    style = {{color: "white", backgroundColor: "#5aac44"}}
                > {buttonTitle} {" "}
                </Button>
                <Icon style = {{marginLeft: 8, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
    }

    render(){
        //if the form is open, we render the form. Otherwise, we render the add button
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup : {
        display : "flex",
        alignItems : "center",
        cursor : "pointer", // so that the user knows it is clickable
        borderRadius : 3,
        height : 36,
        width : 230,
        paddingLeft : 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alightItems: "centre"
    }
}

export default connect() (ActionButton);