import React from 'react'
import PropTypes from 'prop-types'

export default function Button(prop) {
  return (
    <button className={`btn ${prop.className}`} onClick={prop.onClick}>

    </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func
}
