import styled from 'styled-components'

interface ButtonProps {
    prevStep?: boolean,
    nextStep?: boolean
}

const StyledButton = styled('button')`
  width: 100%;
  height: 31px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  
  border: 2px solid #6F91AA;
  background-color: ${(p: ButtonProps) => p.prevStep ? '#fff' : ''};
  color: ${(p: ButtonProps) => p.prevStep ? '#6F91AA' : ''};
  
  background-color: ${(p: ButtonProps) => p.nextStep ? '#6F91AA' : ''};
  color: ${(p: ButtonProps) => p.nextStep ? '#fff' : ''};

`

export default StyledButton
