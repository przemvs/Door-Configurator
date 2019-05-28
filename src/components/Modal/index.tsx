import React from 'react'
import ReactDOM from 'react-dom'
import {StyledModal, Backdrop} from "./StyledModal";
import Close from './Close';
import Wrapper from './Wrapper';

type ModalProps = {
  visible: boolean,
  closeModal: (ev: boolean) => void
}

const Modal: React.FC<ModalProps> = ({visible, closeModal, children}) => {
  return visible ? ReactDOM.createPortal(
    <StyledModal>
      <Backdrop/>
      <Wrapper>
        <Close onClick={() => closeModal(false)}>X</Close>
        {children}
      </Wrapper>
    </StyledModal>,
    document.body
  ) : null
}

export default Modal
