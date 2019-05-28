import styled from 'styled-components'

type PaletteProps = {
    color: string
}

const Palette = styled('div')`
  background-color: ${(p: PaletteProps) => p.color};
  order: -1;
  
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin-left: 8px;
  margin-bottom: 8px;
`

export default Palette
