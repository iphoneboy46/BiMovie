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

    const contentRef= useRef(null);

    const closeModal = () =>{
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose){
            props.onClose();
        }
    }

    return (
        <div ref={contentRef} className={styles.modal__content}>
            {props.children}
            <div className="modal__content__close">
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal