import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Tiles from "./Tiles";
import ActionButton from "./ActionButton";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { deleteCard } from "../actions";



const DeleteTile = () => {
    return (
        <Droppable droppableId = {String(listID)}>
            {provided => (
                <ListContainer3
                    {... provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <h6 style = {styles.header}>{title}</h6>
                    <div style = {{height : 400, overflowX : 'auto'}} >
                        {cards.map((card, index) => (
                            <Tiles key = {card.id}
                                   index = {index}
                                   text = {card.text}
                                   id = {card.id}/>
                        ))}
                        {provided.placeholder}
                        {/* when you drag a card, you need a placeholder so the white space is fitting */}
                    </div>
                    <ActionButton listID= {listID} />
                </ListContainer3>
            )}
        </Droppable>
    );
};


export default DeleteTile;
