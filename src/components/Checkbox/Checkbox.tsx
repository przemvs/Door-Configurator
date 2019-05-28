import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled('input')`
    display: none;
    position: relative;
    
    + label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-55%);
            height: 25px;
            width: 28px;
            background: white;
            border: 1px solid #A5A1A1;
        }
    }
    
    &:checked + label {
      &::after {
        content: '';
        position: absolute;
        left: 6px;
        top: 50%;
        transform: translateY(-60%);
        height: 16px;
        width: 18px;
        background: #bf9b30;
      }
    }
`

const Text = styled('span')`
    color: #A5A1A1;
    padding-left: 15px;
    font-size: 16px;
    line-height: 21px;
`

interface CheckboxProps {
    id: string
    name: string,
    label: string,
    checked?: boolean,
}

const Checkbox: React.FC<CheckboxProps> = (props) => (
    <>
        <StyledCheckbox type="checkbox" {...props}/>
        <label htmlFor={props.name}>
            <Text>{props.label}</Text>
        </label>
    </>
)

export default Checkbox
