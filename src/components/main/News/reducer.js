/* eslint-disable default-case */
import {fromJS} from "immutable"
const defaultStore=fromJS({
    count:0
})

export default (state=defaultStore,action)=>{
    
    switch (action.type){
        case "NUM_ADD":
                state.num++;
            break;
    }
    return state;
}