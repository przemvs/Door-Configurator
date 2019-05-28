import React from 'react'
import {RouteComponentProps, withRouter} from "react-router";
import Sidebar from '../../../components/Sidebar';
import Wrapper from "../../../components/Sidebar/Wrapper";
import Heading from '../../../components/Sidebar/Heading';
import Radio from "../../../components/Radio";
import ColorGroup from './ColorGroup';
import Palette from './Palette';
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

const ThirdStep: React.FC<FirstConfiguration> = ({door, setDoor, match}) => {
    return (
        <Sidebar path={match.path}>
            <Wrapper>
                <Heading>
                    <FormattedMessage id="app.chooseAColor" defaultMessage="Choose a color"/>
                </Heading>

                <ColorGroup>
                    <FormattedMessage id="app.black" defaultMessage="Black">
                        {txt => (
                            <Radio
                                label={String(txt)}
                                id="black"
                                name="door-color"
                                value='#000'
                                checked={door.color === '#000'}
                                onChange={ev => setDoor({...door, color: ev.target.value})}
                            >
                                <Palette color='#000'/>
                            </Radio>
                        )}
                    </FormattedMessage>

                    <FormattedMessage id="app.gray" defaultMessage="Gray">
                        {txt => (
                            <Radio
                                label={String(txt)}
                                id="gray"
                                name="door-color"
                                value='#797474'
                                checked={door.color === '#797474'}
                                onChange={ev => setDoor({...door, color: ev.target.value})}
                            >
                                <Palette color='#797474'/>
                            </Radio>
                        )}
                    </FormattedMessage>

                    <FormattedMessage id="app.white" defaultMessage="White">
                        {txt => (
                            <Radio
                                label={String(txt)}
                                id="white"
                                name="door-color"
                                value='#F4F2F2'
                                checked={door.color === '#F4F2F2'}
                                onChange={ev => setDoor({...door, color: ev.target.value})}
                            >
                                <Palette color='#F4F2F2'/>
                            </Radio>
                        )}
                    </FormattedMessage>
                </ColorGroup>
            </Wrapper>
        </Sidebar>
    )
}

export default withRouter(ThirdStep)
