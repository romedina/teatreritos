import React, { useState, useEffect } from 'react'
import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { getVideos } from '../../firebase'

const VideoList = props => {
  const [videos, setVideos] = useState({})

  const fetchVideos = async any => {
    const { primary } = await getVideos()
    setVideos(primary)
  }

  useEffect(() => {
    fetchVideos()
  }, [])
  
  return (
    <GridContent container justify='center' alignItems='center' spacing={2}>
      <VideoContent item xs={12} md={4}>
        <div dangerouslySetInnerHTML={{__html: videos[1] }} />
        <Title>{videos.titulo_1}</Title>
      </VideoContent>
      <VideoContent item xs={12} md={4}>
        <div dangerouslySetInnerHTML={{__html: videos[2] }} />
        <Title>{videos.titulo_2}</Title>
      </VideoContent>
      <VideoContent item xs={12} md={4} >
        <div dangerouslySetInnerHTML={{__html: videos[2] }} />
        <Title>{videos.titulo_3}</Title>
      </VideoContent>
    </GridContent>
  )
}
const Title = styled('div')({
  color: '#fff',
  fontSize: '1.5em'
})

const GridContent = styled(Grid)({
  
})

const VideoContent = styled(Grid)({
  '& iframe': {
    width: '100%',
    height: '200px',
  }
})

export default VideoList
