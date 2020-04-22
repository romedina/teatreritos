import React, { useState, useEffect } from 'react'
import { styled } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'

const Menu = props => {
  const [selected, setSelected] = useState('home')
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.scrollY
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
    top: fixed ? '10px' : '200px',
  }
  
  // update menu selected
  useEffect(() => {
    const handleScrollSet = () => {
      var scrolled = window.scrollY
      if (scrolled < 624 && selected !== 'home'){
        console.log('set_selected1')
        setSelected('home')
      }
      if (scrolled > 624 && scrolled < 2326 && selected !== 'be'){
        console.log('set_selected2')
        setSelected('be')
      }
      if (scrolled > 2326 && scrolled < 3369 && selected !== 'academia'){
        console.log('set_selected3')
        setSelected('academia')
      }
      if (scrolled > 3369 && selected !== 'classes'){
        console.log('set_selected4')
        setSelected('classes')
      }
    }
    window.addEventListener('scroll', handleScrollSet)
    return () => window.removeEventListener('scroll', handleScrollSet)
  }, [selected])
  

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
  '@media (max-width: 600px)': {
    display: 'none'
  }
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
