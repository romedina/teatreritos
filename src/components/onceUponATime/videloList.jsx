import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { ButtonBase } from '@material-ui/core'

const VideoList = props => {
  if (!props.data) return null
  
  return (
    <GridContent container justify='center' alignItems='center' spacing={2}>
      {props.data[props.section][1] && props.data[props.section].titulo_1 && (
        <VideoContent item xs={12} md={4}>
          <div dangerouslySetInnerHTML={{__html: props.data[props.section][1] }} />
          <Title>{props.data[props.section].titulo_1}</Title>
        </VideoContent>
      )}
      {props.data[props.section][2] && props.data[props.section].titulo_2 && (
        <VideoContent item xs={12} md={4}>
          <div dangerouslySetInnerHTML={{__html: props.data[props.section][2] }} />
          <Title>{props.data[props.section].titulo_2}</Title>
        </VideoContent>
      )}
      {props.data[props.section][3] && props.data[props.section].titulo_3 && (
        <VideoContent item xs={12} md={4}>
          <div dangerouslySetInnerHTML={{__html: props.data[props.section][3] }} />
          <Title>{props.data[props.section].titulo_3}</Title>
        </VideoContent>
      )}
      {/* {props.data[props.section][3] && props.data[props.section][2] && props.data[props.section][1] && (
        <MoreCOntent>
          <More href={props.data.channel.url}>Ver más...</More>
        </MoreCOntent>
      )} */}
    </GridContent>
  )
}
const Title = styled('div')({
  color: '#fff',
  fontSize: '1.5em'
})

const GridContent = styled(Grid)({
  
})

const MoreCOntent = styled('div')({
  width: '100%'
})

const More = styled(ButtonBase)({
  margin: 'auto',
  display: 'block',
  border: "1px solid #fff",
  color: "#fff",
  fontSize: "1.2em",
  width: "150px",
  textAlign: "center",
  padding: "7px",
  borderRadius: "5px",
  marginTop: "50px"
})

const VideoContent = styled(Grid)({
  '& iframe': {
    width: '100%',
    height: '200px',
  }
})

export default VideoList
