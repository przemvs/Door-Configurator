import React from 'react'
import {RouteComponentProps, withRouter} from "react-router";

import Sidebar from "../../../components/Sidebar";
import Heading from "../../../components/Sidebar/Heading";
import Wrapper from "../../../components/Sidebar/Wrapper";

import Input from "../../../components/Input";
import ActionButton from './ActionButton';
import Actions from './Actions';
import {FormattedMessage} from "react-intl";

type DoorProps = {
    type: string,
    width: number,
    height: number,
    beams: number,
    posts: number,
    color: string
}

interface FirstConfiguration extends RouteComponentProps {
    door: DoorProps,
    setDoor: (event: DoorProps) => void,
}

const SecondStep: React.FC<FirstConfiguration> = ({door, setDoor, match}) => {
    return (
        <Sidebar path={match.path}>
            <Wrapper>
                <Heading>
                    <FormattedMessage id="app.doorDivision" defaultMessage="Door division"/>
                </Heading>

                <FormattedMessage id="app.numberOfBeams" defaultMessage="Number of beams">
                    {txt => (
                        <Input
                            id="beams"
                            label={String(txt)}
                            name="beams"
                            value={door.beams}
                            type="number"
                            hasActions
                        >
                            <Actions>
                                <ActionButton
                                    onClick={() => setDoor({
                                        ...door,
                                        beams: door.beams === 4 ? door.beams : door.beams + 1
                                    })}
                                >
                                    +
                                </ActionButton>
                                <ActionButton
                                    onClick={() => setDoor({
                                        ...door,
                                        beams: door.beams === 0 ? door.beams : door.beams - 1
                                    })}
                                >
                                    -
                                </ActionButton>
                            </Actions>
                        </Input>
                    )}
                </FormattedMessage>

                <FormattedMessage id="app.numberOfPosts" defaultMessage="Number of posts">
                    {txt => (
                        <Input
                            id="posts"
                            label={String(txt)}
                            name="posts"
                            value={door.posts}
                            type="number"
                            hasActions
                        >
                            <Actions>
                                <ActionButton
                                    onClick={() => setDoor({
                                        ...door,
                                        posts: door.posts === 4 ? door.posts : door.posts + 1
                                    })}
                                >
                                    +
                                </ActionButton>
                                <ActionButton
                                    onClick={() => setDoor({
                                        ...door,
                                        posts: door.posts === 0 ? door.posts : door.posts - 1
                                    })}
                                >
                                    -
                                </ActionButton>
                            </Actions>
                        </Input>
                    )}
                </FormattedMessage>
            </Wrapper>
        </Sidebar>
    )
}

export default withRouter(SecondStep)
