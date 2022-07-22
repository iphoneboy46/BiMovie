import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'


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

const outLineButton = (props) =>{
    return (
    <button 
        className={`btn-outline ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
