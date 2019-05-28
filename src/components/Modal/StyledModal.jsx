import styled from 'styled-components'

const Backdrop = styled('div')`
  position: absolute;
  
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  background: #ADB2B5;
  opacity: 0.25;
  filter: blur(5px) brightness(50%);
  
  z-index: -1;
`

const StyledModal = styled('div')`
  position: fixed;
  
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export {Backdrop, StyledModal}
