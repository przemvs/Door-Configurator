import React from 'react'
import styled from 'styled-components'

const StyledError = styled('div')`
  background-color: #F24E33;
  height: 81px;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorMessage = styled('span')`
  color: #fff;
  font-size: 16px;
  line-height: 21px;
`

const Error: React.FC = ({children}) => (
    <StyledError>
        <ErrorMessage>{children}</ErrorMessage>
    </StyledError>
)

export default Error
