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
        {props.children}
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {

    const contentRef= useRef(nulll)

    return (
        <div className="modal__content">

        </div>
    )
}

export default Modal