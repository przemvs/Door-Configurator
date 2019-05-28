import React from 'react'

import logo from '../../../assets/images/Logo.png'
import styled from "styled-components";

const StyledLogo = styled('div')`
  flex: 0 1 auto;
  width: auto;
  
  display: flex;
  align-items: center;
`

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="APPLOVER"/>
    </StyledLogo>
  )
}

export default Logo
