import styled from "styled-components";

const StyledSteps = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  
  max-width: 359px;
  width: 100%;
  margin: 0 auto;
`

const Step = styled('div')`
  flex: 0 1 auto;
  text-align: center;
`

const Line = styled('div')`
  background: #F1F9FF;
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: calc(100% - 50px);
`

export {StyledSteps, Step, Line}
