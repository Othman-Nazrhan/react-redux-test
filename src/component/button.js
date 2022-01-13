import React from 'react'
import PropTypes  from 'prop-types'

 function Button  ({label, backgroundColor, size='md', handlClick}) {

    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    
   const style ={
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
   }
    return (
           <button onClick={handlClick} style={style} >{label}</button>
    )   
}
 Button.propTypes = {
            label:PropTypes.string,
            backgroupeColor:PropTypes.string,
            size: PropTypes.oneOf(["sm", "md", "lg"]),
            handlClick:PropTypes.func,
    }

export default Button