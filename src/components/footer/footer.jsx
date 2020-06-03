import React from 'react'
import { styled } from '@material-ui/core/styles'
import logo from '../../assets/logo.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Typography } from '@material-ui/core'

const Footer = props => {
  return (
    <Content>
      <Picture src={logo} />
      <IconsContent>
        <FacebookIcon onClick={e => window.location.href = 'https://www.facebook.com/soyteatrerito'}/>
        <YouTubeIcon onClick={e => window.location.href='https://www.youtube.com/channel/UCxaGszT8zhUavuQKbLhptoQ'}/>
        <InstagramIcon onClick={e => window.location.href="https://www.instagram.com/soyteatrerito/?hl=es-la"} />
      </IconsContent>
      <TypographyStyled onClick={e => window.location.href="mailto:hola@teatreritos.com"}>Hola@teatreritos.com</TypographyStyled>
    </Content>
  )
}

const Content = styled('div')({
  padding: '100px 30px',
})

const IconsContent = styled('div')({
  margin: '30px auto',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  '& svg': {
    cursor: 'pointer',
    color: '#fff',
    fontSize: '3em',
    marginRight: '15px',
    '&:last-of-type': {
      marginRight: '0px'
    },
    transition: 'all 0.5s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
})

const Picture = styled('img')({
  display: 'block',
  margin: 'auto',
  maxWidth: '400px',
  width: '90%'
})
const TypographyStyled = styled(Typography)({
  color: '#29a2d9',
  textAlign: 'center',
  fontSize: '2em',
  marginTop: '20px',
  cursor: 'pointer',
  transition: 'all 0.5s',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  '@media (max-width:500px)': {
    fontSize: '1.6em',
  }
})

export default Footer
