import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";

const CardContainer = styled.div`
    margin-bottom: 8px;
`

const Tiles = ({text, id, index, listID}) => {
    // console.log('Tiles');
    // console.log(id)
    return (
        <Draggable draggableId = {String(id)} index={index}>
            {provided => (
                //so user can press and hold any part of the container to drag
                <CardContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                <Card>
                    <CardContent>
                        <Typography gutterBottom> {text} </Typography>
                        <DeleteButton cardID={id} listID={listID}/>
                        {/*} <button
                            icon size='mini'
                            style={
                                {backgroundColor : 'pink',  border: 'white' , padding: '3', float: 'top-right', marginLeft:'10px', marginRight:'5px'}}
                            onClick={}
                           >
                            -
                        </button> */}
                    </CardContent>
                </Card>
                </CardContainer>
            )}
        </Draggable>
    );
};

const styles = {
    cardContainer: {
        marginBottom : 8
    }
};
export default Tiles;