import React from 'react'
import { styled } from '@material-ui/core/styles'
import logo from '../../assets/whiteLogo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Typography } from '@material-ui/core'

const Footer = props => {
  return (
    <Content>
      <Picture src={logo} />
      <IconsContent>
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </IconsContent>
      <TypographyStyled>Hola@teatreritos</TypographyStyled>
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
    color: '#fff',
    fontSize: '3em',
    marginRight: '15px',
    '&:last-of-type': {
      marginRight: '0px'
    }
  }
})

const Picture = styled('img')({
  display: 'block',
  margin: 'auto',
  maxWidth: '90%'
})
const TypographyStyled = styled(Typography)({
  color: '#29a2d9',
  textAlign: 'center',
  fontSize: '2em',
  marginTop: '20px'
})

export default Footer
