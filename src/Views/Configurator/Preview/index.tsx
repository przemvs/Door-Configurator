import React, {createRef, useEffect, useState} from 'react'
import Canvas from "./Canvas";

import bg from '../../../assets/images/3d_bg.jpg'
import windowImage from '../../../assets/images/window_image.jpg'
import StyledPreview from "./StyledPreview";
import {ViewType, Button} from "./ViewType";

type DoorProps = {
  type: string,
  width: number,
  height: number,
  beams: number,
  posts: number,
  color: string
}

type PreviewProps = {
  door: DoorProps
}

interface DrawDoorProps {
  (context: CanvasRenderingContext2D,
   height: number,
   width: number,
   pad: number,
   beams: number,
   posts: number): void
}

const getCanvasRenderingContext2D = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const context = canvas.getContext('2d');

  if (context === null) {
    throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
  }

  return context;
}

const drawFirstDoor: DrawDoorProps = (context, height, width, pad, beams, posts) => {
  for (let x = 0; x <= width; x += beams) {
    context.moveTo((pad / 2) + x - 16, 472 - 91)
    context.lineTo((pad / 2) + x - 16, 472 - 91 - height - 6)
  }

  // Width
  for (let x = 0; x <= height; x += posts) {
    context.moveTo((pad / 2) - 16, 472 - 94 - height + x)
    context.lineTo(width + (pad / 2) - 16, 472 - 94 - height + x)
  }
}

const drawSecondDoor: DrawDoorProps = (context, height, width, pad, beams, posts) => {
  const maxWidth = 160
  const spaceBeforeDoor = maxWidth - width

  //Height
  for (let x = 0; x <= width; x += beams) {
    context.moveTo((pad - spaceBeforeDoor) + x + 4, 472 - 91)
    context.lineTo((pad - spaceBeforeDoor) + x + 4, 472 - 91 - height - 6)
  }

  // Width
  for (let x = 0; x <= height; x += posts) {
    context.moveTo((pad - spaceBeforeDoor) + 4, 472 - 94 - height + x)
    context.lineTo((width - spaceBeforeDoor) + pad + 4, 472 - 94 - height + x)
  }
}

const Preview: React.FunctionComponent<PreviewProps> = ({door}) => {
  const [viewType, setViewType] = useState('2d')

  const previewRef = createRef<HTMLCanvasElement>()

  const background = new Image()
  background.src = bg
  const windowBackground = new Image()
  windowBackground.src = windowImage

  useEffect(() => {
    const canvas = previewRef.current as HTMLCanvasElement
    const ctx: CanvasRenderingContext2D = getCanvasRenderingContext2D(canvas)
    const padding = canvas.offsetWidth / 2

    if (viewType === '3d') {
      const doorHeight = door.height + 6
      const doorWidth = door.type === 'single' ? door.width + 6 : (door.width * 2 + 14)

      ctx.drawImage(background, -219, -89)
      ctx.drawImage(windowBackground, 129, canvas.height - door.height - 97, doorWidth, doorHeight,
        129, canvas.height - doorHeight - 91, doorWidth, doorHeight + 76)
    }

    if (viewType === '2d') {
      canvas.width = canvas.width
    }

    const posts = door.width / (door.posts + 1)
    const beams = door.height / (door.beams + 1)

    if (door.type === 'single') {
      ctx.beginPath()
      drawFirstDoor(ctx, door.height, door.width, padding, posts, beams)
    }

    if (door.type === 'double') {
      ctx.beginPath()
      drawFirstDoor(ctx, door.height, door.width, padding, posts, beams)
      drawSecondDoor(ctx, door.height, door.width, padding, posts, beams)
    }

    ctx.strokeStyle = door.color
    ctx.lineWidth = 6
    ctx.stroke()

  }, [door, viewType])

  return (
    <StyledPreview>
      <Canvas width={590} height={472} ref={previewRef}/>
      <ViewType>
        <Button active={viewType === '3d'} onClick={() => setViewType('3d')}>3D</Button>
        <Button active={viewType === '2d'} onClick={() => setViewType('2d')}>2D</Button>
      </ViewType>
    </StyledPreview>
  )
}

export default Preview
