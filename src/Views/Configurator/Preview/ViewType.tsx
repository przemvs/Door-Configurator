import styled from 'styled-components'

type ButtonProps = {
    active: boolean
}

const ViewType = styled('div')`
  position: absolute;
  top: 20px;
  right: 35px;
  
  display: flex;
`

const Button = styled('button')`
  background-color: ${(p: ButtonProps) => p.active ? '#fff' : '#CBCBCB'};
  border: 2px solid #6F91AA;
  
  color: #6F91AA;
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 26px; 
  width: 36px;
`

export { ViewType, Button }
