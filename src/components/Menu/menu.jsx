import React, { useState, useEffect } from 'react'
import { styled } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'
import { Link } from 'react-scroll'

const Menu = props => {
  const [selected, setSelected] = useState('home')
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.scrollY
      if (scrolled > 200 && !fixed) {
        setFixed(true)
      } else if (scrolled < 200 && !!fixed) {
        setFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fixed])

  const position = {
    position: fixed ? 'fixed' : 'absolute',
    top: fixed ? '0' : '200px',
    background: fixed ? '#fff' : '',
    boxShadow: fixed ? '1px 1px 2px gray' : ''
  }

  return (
    <Fade in={true} timeout={5000}>
    <Content style={position}>
      <Item onSetActive={e => setSelected('home')} hashSpy={true} spy={true} smooth={true} selected={selected === 'home'} to='home'>Inicio</Item>
      <Item onSetActive={e => setSelected('be')} hashSpy={true} spy={true} smooth={true} selected={selected === 'be'} to='be'>Ser teatrerito o no ser</Item>
      <Item onSetActive={e => setSelected('academia')} hashSpy={true} spy={true} smooth={true} selected={selected === 'academia'} to='academia'>Nuestra academia</Item>
      <Item onSetActive={e => setSelected('classes')} hashSpy={true} spy={true} smooth={true} selected={selected === 'classes'} to='classes'>Clases</Item>
      <Item onClick={props.activeModalContact} selected={selected === 'contact'} to='contact'>Contactanos</Item>
    </Content>
    </Fade>
  )
}

const Content = styled('nav')({
  padding: '10px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  top: '220px',
  position: 'absolute',
  zIndex: 20,
  '@media (max-width: 600px)': {
    display: 'none'
  }
})

const Item = styled(Link)({
  fontWeight: 'bold',
  color: props => props.selected ? '#fff' : '#016ea6',
  background: props => props.selected ? '#ffc808' : '',
  marginRight: '20px',
  padding: '7px',
  borderRadius: '5px',
  textDecoration: 'none',
  cursor: 'pointer'

})

export default Menu
