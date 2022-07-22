import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = props => {
    const [active,setActive] = useState(false);

  return (
    <div>
        Modal   
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export default Modal