import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'


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

export const OutLineButton = (props) =>{
    return (
    <Button 
        className={`${styles.btnOutline} ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </Button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
