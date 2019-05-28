import React from 'react'
import {withRouter} from "react-router-dom";

import {Circle, Details, Title, SubTitle} from "./StepDetails";
import {StyledSteps, Line, Step} from "./StyledStep";

const Steps: React.FC = (props) => {
    console.log(props)
    return (
        <StyledSteps>
            <Line />
            <Step>
                <Circle/>
                <Details>
                    <Title>First Step</Title>
                    <SubTitle>Choose Door</SubTitle>
                </Details>
            </Step>
            <Step>
                <Circle/>
                <Details>
                    <Title>Second Step</Title>
                    <SubTitle>Choose door division</SubTitle>
                </Details>
            </Step>
            <Step>
                <Circle/>
                <Details>
                    <Title>Third Step</Title>
                    <SubTitle>Choose Color</SubTitle>
                </Details>
            </Step>
        </StyledSteps>
    )
}

export default withRouter(Steps)
