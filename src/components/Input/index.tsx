import React, {FunctionComponent} from 'react'

import InputGroup from "./InputGroup";
import StyledInput from "./StyledInput";
import Title from './Title';
import Label from './Label';

type InputProps = {
  id: string,
  label: string,
  name: string,
  value: string | number,
  type: 'text' | 'number' | 'email' | 'phone',
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  min?: number,
  max?: number,
  hasActions?: boolean
}

const Input: FunctionComponent<InputProps> = ({id, label, children, ...props}) => (
  <InputGroup>
    <Label htmlFor={id}>
      <Title>{label}</Title>
      <StyledInput
        id={id}
        {...props}
      />
      {children}
    </Label>
  </InputGroup>
)

export default Input
