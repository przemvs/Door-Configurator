import React from 'react'
import {RouteComponentProps, withRouter} from "react-router-dom";

import {Circle, Details, Title, SubTitle} from "./StepDetails";
import {StyledSteps, Line, Step} from "./StyledStep";
import {FormattedMessage} from "react-intl";

const NavigationSteps: React.FC<RouteComponentProps> = ({location}) => (
  <StyledSteps>
    <Line/>
    <Step>
      <Circle active={location.pathname.includes('first-step')}/>
      <Details>
        <Title>
          <FormattedMessage id="app.firstStep" defaultMessage="First Step"/>
        </Title>
        <SubTitle>
          <FormattedMessage id="app.chooseDoor" defaultMessage="Choose Door"/>
        </SubTitle>
      </Details>
    </Step>
    <Step>
      <Circle active={location.pathname.includes('second-step')}/>
      <Details>
        <Title>
          <FormattedMessage id="app.secondStep" defaultMessage="Second Step"/>
        </Title>
        <SubTitle>
          <FormattedMessage id="app.chooseDivision" defaultMessage="Choose door division"/>
        </SubTitle>
      </Details>
    </Step>
    <Step>
      <Circle active={location.pathname.includes('third-step')}/>
      <Details>
        <Title>
          <FormattedMessage id="app.thirdStep" defaultMessage="Third Step"/>
        </Title>
        <SubTitle>
          <FormattedMessage id="app.chooseColor" defaultMessage="Choose color"/>
        </SubTitle>
      </Details>
    </Step>
  </StyledSteps>
)

export default withRouter(NavigationSteps)
