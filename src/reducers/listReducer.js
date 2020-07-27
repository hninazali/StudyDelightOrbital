import { CONSTANTS } from "../actions";

let listID = 8;
let cardCount = 8 ;

const initialState = [
    {
        title: "Tasks Pool",
        id: 'list-${0}',

        cards: [
            {
                id: 'card-${0}',
                text: "Add tasks without a planned date here."
            } /*,
            {
                id: 'card-${1}',
                text: "This is second task"
            } */

        ]
    },
    {
        title: "Monday",
        id: 'list-${1}',

        cards: [
            {
                id: 'card-${1}',
                text: "New Week, 7 New Days. Time to crush you goals!"
            } /*,
            {
                id: 'card-${3}',
                text: "This is second task"
            },
            {
                id: 'card-${4}',
                text: "This is third task"
            },
            {
                id: 'card-${5}',
                text: "This is fourth task"
            }, */

        ]
    },
    {
        title: "Tuesday",
        id: 'list-${2}',
        cards: [
            {
                id: 'card-${2}',
                text: "Continue to be epic this week!"
            }
            ]
    },
    {
        title: "Wednesday",
        id: 'list-${3}',
        cards: [
            {
                id: 'card-${3}',
                text: "This week is yours. Own it. Don't give up!"
            }
        ]
    },
    {
        title: "Thursday",
        id: 'list-${4}',
        cards: [
            {
                id: 'card-${4}',
                text: "Go the extra mile! It's never crowded."
            }
        ]
    },
    {
        title: "Friday",
        id: 'list-${5}',
        cards: [
            {
                id: 'card-${5}',
                text: "TGIF! Hang in there."
            }
        ]
    },
    {
        title: "Saturday",
        id: 'list-${6}',
        cards: [
            {
                id: 'card-${6}',
                text: "Stop walking and you will have to run tomorrow!"
            }
        ]
    },
    {
        title: "Sunday",
        id: 'list-${7}',
        cards: [
            {
                id: 'card-${7}',
                text: "Every day this week is a new opportunity for you to become a better you."
            }
        ]
    },

 /*  {
        title: "Trash",
        id: 'list-${8}',
        cards: [
            {
                id: 'card-${8}',
                text: "Drop your tasks here to delete"
            }
        ]
    }
*/

];


const listReducer = (state = initialState, action, cardID) => {
    switch (action.type){

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: 'list-${listID}'
            }
            listID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardCount}`
            }
            cardCount += 1

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        }

        case CONSTANTS.DELETE_CARD: {

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    const newCards = list.cards.filter(card => card.id !== action.payload.cardID);
                        return {
                             ...list,
                            cards: newCards
                        }
                } else {
                    return list;
                }
            });
            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:

            const {
                droppableIDStart,
                droppableIDEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;
            const newState = [...state];

            //in the same list
            if(droppableIDStart === droppableIDEnd) {
                const list = state.find(list => droppableIDStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1) //removing what you are dragging
                list.cards.splice(droppableIndexEnd, 0, ...card) //inserting it into droppableIndexEnd
            }

            //move card to other list

            else if (droppableIDStart !== droppableIDEnd){
                //find the list where the drag happened
                const listStart = state.find(list => droppableIDStart === list.id);

                //pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //find the list where the drag ended
                const listEnd = state.find(list => droppableIDEnd === list.id);

                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            console.log(newState);
            return newState;

        default:
            return state;
    }
};

export default listReducer;