import React from "react";
import Tiles from "./Tiles";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import firebase from '../config/fbConfig'

// const ListContainer = styled.div`
//     background-color: #ffb6c1;
//     border-radius: 3px;
//     width: 250px;
//     padding: 8px;
//     height: 100%; //so that the boxes won't have extra heights
//     margin-right: 8px;
//     margin-top : 310px;
//     position: relative;
// `
// const ListContainer2 = styled.div`
//     background-color: #194D33;
//     border-radius: 3px;
//     padding: 8px;
//     margin-right: 8px;
//     margin-top : 30px;
//     width:70%;
//     height:300px;
//     position:absolute;
// `

const ListContainer = styled.div`
    background-color: #ffb6c1;
    border-radius: 3px;
    width: 250px;
    padding: 8px;
    height: 100%; //so that the boxes won't have extra heights
    margin-right: 8px;
    margin-top : 30px;
`
// For TaskPool css
const ListContainer2 = styled.div`
    background-color: #f78da7;
    border-radius: 3px;
    width: 400px;
    padding: 8px;
    //height: 100%; //so that the boxes won't have extra heights
    margin-right: 8px;
    margin-top : 30px;
`
/*
// For DeleteTasks css
const ListContainer3 = styled.div`
    background-color: #f78da7;
    border-radius: 3px;
    width: 100px;
    padding: 8px;
    //height: 100%; //so that the boxes won't have extra heights
    margin-right: 8px;
    margin-top : 30px;
`
*/


const TaskList = ({title, cards, listID }) => {
    if (title === "Tasks Pool") {
        return (
            <Droppable droppableId={String(listID)}>
                {provided => (
                    <ListContainer2
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h6 style={styles.header}>{title}</h6>
                        <div style={{height: 400, overflowX: 'auto'}}>
                            {cards.map((card, index) => (
                                <Tiles key={card.id}
                                       index={index}
                                       text={card.text}
                                       id={card.id}
                                       listID = {listID}/>
                            ))}
                            {provided.placeholder}
                            {/* when you drag a card, you need a placeholder so the white space is fitting */}
                        </div>
                        <ActionButton listID={listID}/>
                    </ListContainer2>
                )}
            </Droppable>
        );

        {/* else if (title === "Trash"){
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
        {/*      </div>
                        {/* <ActionButton listID= {listID} /> */}
        {/*    </ListContainer3>
                )}
            </Droppable>
        );
*/}
    } else{
        return (
            <Droppable droppableId = {String(listID)}>
                {provided => (
                    <ListContainer
                        {... provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h6 style = {styles.header}>{title}</h6>
                        <div style = {{height : 435, overflowX : 'auto'}} >
                        {cards.map((card, index) => (
                            <Tiles key = {card.id}
                                   index = {index}
                                   text = {card.text}
                                   id = {card.id}
                                   listID = {listID}/>
                        ))}
                        {provided.placeholder}
                        {/* when you drag a card, you need a placeholder so the white space is fitting */}
                        </div>
                    </ListContainer>
                )}
            </Droppable>
        );
    }
    
};


/*
const styles = {
    container: {
        backgroundColor: "#ffb6c1",
        borderRadius: 3,
        width: 250,
        padding: 8,
        height: "100%", //so that the boxes won't have extra heights
        marginRight: 8
    }
} */

const styles = {
    header : {
            fontWeight: 'bold',
            fontFamily : 'Palatino',
            marginBottom : 20
    }
}

export default  TaskList;
