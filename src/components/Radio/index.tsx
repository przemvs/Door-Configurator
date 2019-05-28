import React, {FunctionComponent} from 'react'

import InputGroup from "./InputGroup";
import StyledRadio from "./StyledRadio";

type RadioProps = {
  id: string,
  label: string,
  name: string,
  value: string,
  checked: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: FunctionComponent<RadioProps> = ({id, label, children, ...props}) => (
  <InputGroup>
    <StyledRadio
      type="radio"
      id={id}
      {...props}
    />
    <label htmlFor={id}>{label}</label>
    {children}
  </InputGroup>
)

export default Radio
