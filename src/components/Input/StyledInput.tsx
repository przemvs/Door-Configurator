import styled from 'styled-components'

type InputProps = {
    hasActions?: boolean
}

const StyledInput = styled('input')`
  border: 1px solid #A8A5A5;
  color: #848C93;
  position: relative;
  font-size: 12px;
  line-height: 16px;
  
  padding: 3px 7px;
  
  max-width: ${(p: InputProps) => p.hasActions ? '24px' : '44px'};
  width: 100%;
  
  + span {
    margin-left: 5px;
  }
  
  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export default StyledInput
