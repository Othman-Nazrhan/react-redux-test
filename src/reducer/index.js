import {combineReducers}  from  'redux';
import counter from './counter';
import currentUser from  './currentUser';
import users from './reducer';

const rootReducer  = combineReducers({
     counter,
     currentUser,
     users

 

})

export  default rootReducer;