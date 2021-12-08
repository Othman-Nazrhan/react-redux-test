
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allAction from './action';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Calculator from './component/culculator'

const App = () => {

  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  
  const user = {
    name:"othman"
  }

  useEffect(() => {
      dispatch(allAction.userAction.setUser(user))

  }, [])

   console.log(currentUser)


  return (
    <div className="App container mx-auto">
        {
           currentUser.loggedIn ?
          <>
          <h1> hello , {currentUser.user.name}</h1>
          
          <button onClick={() => dispatch(allAction.userAction.logOut())}>Logout</button>
          </>
          :
          <>
          <h1>login</h1>
          <button onClick={()=>dispatch(allAction.userAction.setUser(user))}>login</button>
          </>
        }
          <h1>counetr {counter}</h1>
          <button  style={{backgroundColor:'green'}} onClick={() => dispatch(allAction.counterAction.increment())} >increment</button> 
          <button style={{backgroundColor:'red'}} onClick={() => dispatch(allAction.counterAction.decrement())} >decrement</button>
           <br/> <br/>
          <Calculator />
    </div>
  );
}

export default App;
