import { CONSTANTS } from "../actions";

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, listID}
    };
};

export const deleteCard = (listID, cardID) => {
    // console.log('delete card');
    // console.log(listID, cardID);
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: {listID, cardID}
    };
};