import React, {FunctionComponent} from 'react'
import StyledSidebar from './StyledSidebar';
import ButtonContainer from './ButtonContainer';
import {RouteComponentProps, withRouter} from "react-router";
import StyledButton from "./StyledButton";
import ButtonRow from "./ButtonRow";
import {FormattedMessage} from "react-intl";

interface SidebarProps extends RouteComponentProps {
  path: string
}

// @ts-ignore
const nextStep = (path, history) => {
  if (path.includes('first-step')) {
    history.push('/configurator/second-step')
  }

  if (path.includes('second-step')) {
    history.push('/configurator/third-step')
  }
}

// @ts-ignore
const prevStep = (path, history) => {
  if (path.includes('second-step')) {
    history.push('/configurator/first-step')
  }

  if (path.includes('third-step')) {
    history.push('/configurator/second-step')
  }
}

const Sidebar: FunctionComponent<SidebarProps> = ({children, path, history}) => {
  return (
    <StyledSidebar>
      {children}

      <ButtonContainer>
        {!path.includes('first-step') &&
        <ButtonRow>
          <StyledButton prevStep onClick={() => prevStep(path, history)}>
            <FormattedMessage id="app.prevStep" defaultMessage="Back"/>
          </StyledButton>
        </ButtonRow>
        }
        <ButtonRow>
          <StyledButton nextStep onClick={() => nextStep(path, history)}>
            <FormattedMessage id="app.nextStep" defaultMessage="Next step"/>
          </StyledButton>
        </ButtonRow>
      </ButtonContainer>
    </StyledSidebar>
  )
}

export default withRouter(Sidebar)
