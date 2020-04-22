import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core' 
import VideoList from './videloList'

const OnceUponATime = props => {
  return (
    <Content id='academia'> 
      <TypographyWhite variant='h2' align='center'>Nuestra academia</TypographyWhite>
      <TypographyTitle variant='h2' align='center'>ÉRASE UNA VEZ...</TypographyTitle>
      <TypographySecondary variant='h2' align='center'>(Transmisión en vivo)</TypographySecondary>
      <Text>
        Cada semana un narrador llevará a los teatreritos –sin dejar su hogar– a recorrer lugares
        fantásticos mientras recrean historias emocionantes dando vida a diferentes personajes que
        alimentarán sus dotes actorales. La creatividad será fundamental para que vistan y caractericen a su personaje utilizando solo aquello que tienen en casa.
      </Text>
      <VideoList {...props} section='primary'/>
    </Content>
  )
}

const Content = styled('div')({
  background: '#00299f',
  padding: '50px',
  ['@media (max-width:400px)']: {
    padding: '50px 15px',
  }
})

const TypographyWhite = styled(Typography)({
  color: '#fff',
  fontSize: '2em',
  fontFamily: 'Baloo Paaji 2, cursive!important'
})

const TypographyTitle = styled(Typography)({
  fontSize: '2.8em',
  color: '#f8c033',
  fontFamily: 'Baloo Paaji 2, cursive!important'
})
const TypographySecondary = styled(Typography)({
  fontSize: '1.6em',
  color: '#f8c033',
  fontFamily: 'Baloo Paaji 2, cursive!important'
})

const Text = styled('p')({
  fontSize: '1.2em',
  color: '#fff',
  textAlign: 'center',
  maxWidth: '700px',
  margin: 'auto',
  padding: '20px 0px',
})
export default OnceUponATime
