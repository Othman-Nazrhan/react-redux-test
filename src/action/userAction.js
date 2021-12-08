

const setUser = (userObject) => {

return{
    type:'SET_USER',
    payload : userObject
}

}
const logOut =()=>{
    
    return{
        type:'LOGOUT',
    }
}

export default {
    logOut,
    setUser
}