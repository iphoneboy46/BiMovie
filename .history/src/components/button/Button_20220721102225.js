import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'


export default function Button(props) {
  return (
    <button 
        className={`btn ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
  )
}

export const OutLineButton = (props) =>{
    return (
    <button 
        className={`btnOutline ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
