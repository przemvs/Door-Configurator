import styled from 'styled-components'

type BarWidthProps = {
    barWidth: number
}

const BarWidth = styled('div')`
  width: ${(p: BarWidthProps) => `${p.barWidth}%`};
  height: 18px;
  background: #fff;
  border-radius: 40px;
  margin-left: 7px;
  transition: width 0.1s ease-in-out;
`

export default BarWidth
