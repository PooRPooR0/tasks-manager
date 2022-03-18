import React from 'react'
import { Modal } from 'react-bootstrap'
import classes from './ModalBs.module.css'

const ModalBs = ({show, onHide, title, children}) => {
  return (
    <Modal
        contentClassName={classes.modal_custom}
        show={show}
        onHide={onHide}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
  )
}

export default ModalBs