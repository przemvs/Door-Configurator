import React, {FunctionComponent, useEffect, useState} from 'react'
import Backdrop from "./Backdrop";
import Bar from './Bar';
import Value from './Value';
import BarWidth from './BarWidth';

const Loader: FunctionComponent = () => {
  let [barWidth, setBarWidth] = useState(0)
  let [barPercent, setBarPercent] = useState(0)

  useEffect(() => {
    let width = 0
    let percents = 0

    const timer = setInterval(() => {
      width += 5
      percents += 5
      setBarWidth(width)
      setBarPercent(percents++)
    }, 120);

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Backdrop>
      <Bar>
        <BarWidth barWidth={barWidth}/>
        <Value>{barPercent}%</Value>
      </Bar>
    </Backdrop>
  )
}

export default Loader
