import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'; 
import store from "./reducer"
export default createStore(store,applyMiddleware(thunk));
