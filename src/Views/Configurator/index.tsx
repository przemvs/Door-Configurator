import React, {useState} from 'react'
import {Switch, Route, withRouter, RouteComponentProps, Redirect} from 'react-router-dom'
import styled from "styled-components";

import NavigationSteps from "./NavigationSteps";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

import Preview from "./Preview";
import Wrapper from "./Wrapper";

const StyledConfigurator = styled('main')`
  padding-top: 27px;
`

const initialState = {
    type: 'double',
    width: 160,
    height: 300,
    beams: 4,
    posts: 2,
    color: '#000'
}

const Configurator: React.FC<RouteComponentProps> = ({match}) => {
    const [door, setDoor] = useState(initialState)

    return (
        <StyledConfigurator>
            <NavigationSteps/>
            <Wrapper>
                <Preview door={door} />

                <Switch>
                    <Route
                        exact
                        path={`${match.path}/`}
                        render={() => <Redirect to={`${match.path}/first-step`}/>}
                    />
                    <Route
                        exact
                        path={`${match.path}/first-step`}
                        render={
                            () => <FirstStep door={door} setDoor={setDoor} />
                        }
                    />
                    <Route
                        exact
                        path={`${match.path}/second-step`}
                        render={
                            () => <SecondStep door={door} setDoor={setDoor} />
                        }
                    />
                    <Route
                        exact
                        path={`${match.path}/third-step`}
                        render={
                            () => <ThirdStep door={door} setDoor={setDoor} />
                        }
                    />
                </Switch>
            </Wrapper>
        </StyledConfigurator>
    )
}

export default withRouter(Configurator)
