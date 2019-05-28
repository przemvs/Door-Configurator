import styled from 'styled-components'

const Details = styled('div')`
  background-color: #fff;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.16);
  position: absolute;
  top: calc(100% + 30px);
  right: 0;
  min-width: 302px;
  padding: 40px;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    right: 40px;
    top: -15px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid #fff;
  }
  
  p {
    color: #7E7E7E;
    font-size: 14px;
    line-height: 19px;
    margin: 0;
  }
`

export default Details
