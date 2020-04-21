import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


const VideoList = props => {
  if (!props.data) return null
  
  return (
    <GridContent container justify='center' alignItems='center' spacing={2}>
      <VideoContent item xs={12} md={4}>
        <div dangerouslySetInnerHTML={{__html: props.data[props.section][1] }} />
        <Title>{props.data[props.section].titulo_1}</Title>
      </VideoContent>
      <VideoContent item xs={12} md={4}>
        <div dangerouslySetInnerHTML={{__html: props.data[props.section][2] }} />
        <Title>{props.data[props.section].titulo_2}</Title>
      </VideoContent>
      <VideoContent item xs={12} md={4} >
        <div dangerouslySetInnerHTML={{__html: props.data[props.section][3] }} />
        <Title>{props.data[props.section].titulo_3}</Title>
      </VideoContent>
      <More href={props.data.channel.url}>Ver mas...</More>
    </GridContent>
  )
}
const Title = styled('div')({
  color: '#fff',
  fontSize: '1.5em'
})

const GridContent = styled(Grid)({
  
})

const More = styled('a')({
  color: '#fff',
  fontSize: '1.2em'
})

const VideoContent = styled(Grid)({
  '& iframe': {
    width: '100%',
    height: '200px',
  }
})

export default VideoList
