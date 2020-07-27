import { CONSTANTS } from "../actions";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};

export const sort = (
        droppableIDStart,
        droppableIDEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
        ) => {
            return {
                type: CONSTANTS.DRAG_HAPPENED,
                payload: {
                    droppableIDStart,
                    droppableIDEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId
                }
            }
        }