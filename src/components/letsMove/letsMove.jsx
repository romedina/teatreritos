import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core' 
import VideoList from './videloList'

const OnceUponATime = props => {
  return (
    <Content>
      <TypographyWhite align='center'>¡Teatreritos a moverse!</TypographyWhite>
      <Text>
      Semanalmente los teatreritos montarán una coreografía que enriquecerá sus habilidades de baile,
      retención, coordinación y dominio del escenario. Su cuerpo desarrollará fuerza, elasticidad, agilidad, memoria y actitud.
      </Text>
      <VideoList />
    </Content>
  )
}

const Content = styled('div')({
  background: '#ff6b00',
  padding: '50px',
  ['@media (max-width:400px)']: {
    padding: '50px 15px',
  }
})

const TypographyWhite = styled(Typography)({
  color: '#fff',
  fontSize: '2em'
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
