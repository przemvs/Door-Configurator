import React from 'react'
import {StyledCheckbox, Text} from './CheckboxStyles';

interface CheckboxProps {
    id: string
    name: string,
    label: string,
    checked?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = (props) => (
    <>
        <StyledCheckbox type="checkbox" {...props} />
        <label htmlFor={props.name}>
            <Text>{props.label}</Text>
        </label>
    </>
)

export default Checkbox
