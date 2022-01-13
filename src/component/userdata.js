import React from 'react'

import { useDispatch, useSelector } from 'react-redux'



const Userdata = () => {


    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users)
    return (
        <div>
             <h1>all users</h1>
             {/* <button onClick ={() => dispatch()}> Get User</button>
             <div>Users :{ users.map(( user => (<div key={user.name}>{user.name} </div>)))} </div> */}
        </div>
    )
}
export default Userdata