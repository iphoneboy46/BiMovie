import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>

    </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func
}
