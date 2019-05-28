import styled from 'styled-components'

const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  background: rgba(173,181,183, 0.83);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 2;
`

export default Backdrop
