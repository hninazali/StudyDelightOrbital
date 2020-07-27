import React from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { deleteCard } from "../actions";
import firebase from '../config/fbConfig'

class DeleteButton extends React.Component{

    handleDeleteCard = () => {
        const { dispatch, listID, cardID } = this.props;
        // console.log(listID, cardID);
        dispatch(deleteCard(listID, cardID));
    }


    render(){
        return <div>
            <div style = {styles.formButtonGroup}>
                <Button
                    onMouseDown={this.handleDeleteCard} //use this instead of onClick because it will go back to initial state after clicking
                    variant= "contained"
                    style = {{color: "white", backgroundColor: "#FFB6C1"}}
                > Delete
                </Button>
            </div>
        </div>
    }
}

const styles = {
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alightItems: "centre"
    }
}

export default connect() (DeleteButton);