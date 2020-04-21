import React, { useState, useEffect } from 'react'
import { styled } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'
const Menu = props => {
  const [selected, setSelected] = useState('home')
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.scrollY
      console.log(scrolled)
      if (scrolled > 200 && !fixed) {
        setFixed(true)
        console.log('set')
      } else if (scrolled < 200 && !!fixed) {
        setFixed(false)
        console.log('set__')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fixed])

  const position = {
    position: fixed ? 'fixed' : 'absolute',
    top: fixed ? '10px' : '200px'
  }
  
  

  return (
    <Fade in={true} timeout={8000}>
    <Content style={position}>
      <Item onClick={e => setSelected('home')} selected={selected === 'home'} href='#home'>Inicio</Item>
      <Item onClick={e => setSelected('be')} selected={selected === 'be'} href='#be'>Ser o no ser Teatrerito</Item>
      <Item onClick={e => setSelected('academia')} selected={selected === 'academia'} href='#academia'>Nuestra academia</Item>
      <Item onClick={e => setSelected('classes')} selected={selected === 'classes'} href='#classes'>Clases</Item>
    </Content>
    </Fade>
  )
}

const Content = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  top: '220px',
  position: 'absolute',
  zIndex: 20,
})

const Item = styled('a')({
  fontWeight: 'bold',
  color: props => props.selected ? '#fff' : '#016ea6',
  background: props => props.selected ? '#ffc808' : '',
  marginRight: '20px',
  padding: '7px',
  borderRadius: '5px',
  textDecoration: 'none'

})

export default Menu
