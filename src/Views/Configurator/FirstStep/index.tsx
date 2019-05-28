import React, {useState} from 'react'
import Sidebar from "../../../components/Sidebar";
import {RouteComponentProps, withRouter} from "react-router";
import Heading from "../../../components/Sidebar/Heading";
import Radio from '../../../components/Radio';
import Input from "../../../components/Input";
import Wrapper from "../../../components/Sidebar/Wrapper";
import Unit from './Unit';
import {FormattedMessage} from "react-intl";
import DoorType from "./DoorType";

import helpIcon from '../../../assets/images/icon.svg'
import Tooltip from './Tooltip';

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

type ChangeProps = {
  (value: number, option: string): number
}

const handleChange: ChangeProps = (value, option) => {
  switch (option) {
    case 'width':
      return value >= 160 ? 160 : (value === 0 ? 1 : value)

    case 'height':
      return value >= 300 ? 300 : (value === 0 ? 1 : value)

    default:
      return value === 0 ? 1 : value
  }
}

const FirstStep: React.FC<FirstConfiguration> = ({door, setDoor, match}) => {
  const [modalOpened, handleToggleModal] = useState(false)

  return (
    <Sidebar path={match.path}>
      <Wrapper>
        <Heading>
          <FormattedMessage id="app.doorType" defaultMessage="Door Type"/>
          <Tooltip onClick={() => handleToggleModal(true)}>
            <img src={helpIcon} alt="Open modal"/>
          </Tooltip>
          <DoorType visible={modalOpened} closeModal={handleToggleModal}/>
        </Heading>

        <FormattedMessage id="app.singleDoor" defaultMessage="Single door">
          {(txt) => (
            <Radio
              label={String(txt)}
              id="single-door"
              name="door-type"
              value='single'
              checked={door.type === 'single'}
              onChange={ev => setDoor({...door, type: ev.target.value})}
            />
          )}
        </FormattedMessage>

        <FormattedMessage id="app.doubleDoor" defaultMessage="Double door">
          {txt => (
            <Radio
              label={String(txt)}
              id="double-door"
              name="door-type"
              value='double'
              checked={door.type === 'double'}
              onChange={ev => setDoor({...door, type: ev.target.value})}
            />
          )}
        </FormattedMessage>
      </Wrapper>

      <Wrapper>
        <Heading>
          <FormattedMessage id="app.doorSize" defaultMessage="Door Size"/>
        </Heading>

        <FormattedMessage id="app.width" defaultMessage="Width">
          {txt => (
            <Input
              label={String(txt)}
              type="number"
              id="width"
              value={door.width}
              name="door-width"
              onChange={ev => setDoor({...door, width: handleChange(Number(ev.target.value), 'width')})}
              min={1}
              max={160}
            >
              <Unit>cm</Unit>
            </Input>
          )}
        </FormattedMessage>

        <FormattedMessage id="app.height" defaultMessage="Height">
          {txt => (
            <Input
              label={String(txt)}
              type="number"
              id="height"
              value={door.height}
              name="door-height"
              onChange={ev => setDoor({...door, height: handleChange(Number(ev.target.value), 'height')})}
              min={1}
              max={300}
            >
              <Unit>cm</Unit>
            </Input>
          )}
        </FormattedMessage>
      </Wrapper>
    </Sidebar>
  )
}

//@ts-ignore
export default withRouter(FirstStep)
