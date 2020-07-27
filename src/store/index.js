import { createStore } from "redux";
import rootReducer from "../reducers";

// const reducer = () => {} This is an empty episode from first tutorial

const store = createStore(rootReducer);

export default store;
