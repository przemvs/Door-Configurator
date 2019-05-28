import styled from 'styled-components'

const StyledRadio = styled('input')`
  display: none;
  position: relative;
  
  + label {
    color: #848C93;
    font-size: 14px;
    line-height: 19px;
    position: relative;
    padding-left: 20px;
    cursor: pointer;
        
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-55%);
      height: 10px;
      width: 10px;
      background: white;
      border: 3px solid #CDDBE5;
      border-radius: 50%;
      }
  }
    
  &:checked + label {
    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 50%;
      transform: translateY(-60%);
      height: 8px;
      width: 8px;
      background: #6991B2;
      border-radius: 50%;
    }
  }
`

export default StyledRadio
