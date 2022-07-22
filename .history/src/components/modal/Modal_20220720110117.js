import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = props => {
    const [active,setActive] = useState(false);

    useEffect(() => {
        setActive(props.active)
    },[props.active])

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
        Modal   
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export default Modal