import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'


export default function Button(props) {
  return (
    <button 
        className={`${styles.btn} ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
  )
}

export const outLineButton = (props) =>{
    return (
    <button 
        className={`${styles.btnOutline} ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
