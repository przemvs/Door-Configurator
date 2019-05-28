import styled from "styled-components";

type StepProps = {
    active?: boolean
}

const Circle = styled('div')`
  background-color: ${(p: StepProps) => p.active ? '#95A3AD' : '#CDDBE5'};
  border-radius: 46px;
  height: 46px;
  width: 46px;
  margin: 0 auto;
  position: relative;
  
  transition: 0.3s background-color ease-in-out;
  
  &::after {
    content: '';
    background-color: ${(p: StepProps) => p.active ? '#fff' : '#6E95B5'};
    height: 6px;
    width: 6px;
    border-radius: 6px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    transition: 0.3s background-color ease-in-out;
  }
`

const Details = styled('div')`
  color: #848C93;  
  margin-top: 11px;
`

const Title = styled('h3')`
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;
  margin: 0;
`

const SubTitle = styled('h4')`
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;
  margin: 0;
`

export {Circle, Details, Title, SubTitle}
