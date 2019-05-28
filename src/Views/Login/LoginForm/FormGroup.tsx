import styled from 'styled-components'

interface FormProps {
    noMargin?: boolean,
    customMargin?: boolean
}

const FormGroup = styled('div')`
  width: 100%;
  margin: ${(p: FormProps) => (!p.noMargin || !p.customMargin) && '0 0 34px'};
  margin: ${(p: FormProps) => p.noMargin && 0};
  margin: ${(p: FormProps) => p.customMargin && '20px 0 29px'};
`

export default FormGroup
