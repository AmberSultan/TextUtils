import React from 'react'

function Alert(props) {

    //below is a function that is used to capitalize first letter of a word (this function is optional)
    const capitalize =  ( word) =>{
            let capLetter = word.toLowerCase();
            return capLetter.charAt(0).toUpperCase() + capLetter.slice(1); //slice() doesn't modify the original array.it creates a new array with the selected elements.
    }

  return (
  
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
  
  )
}

export default Alert
