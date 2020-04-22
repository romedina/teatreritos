import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Grid, ButtonBase, Typography } from '@material-ui/core'

const Classes = props => {
  return (
    <Container id='classes'>
        <Content container justify='center' alignItems='center' spacing={2}>
        <Grid item xs={12}>
          <TypographyStyled variant='h3' align='center' >Clases</TypographyStyled>
        </Grid>
        <Grid item xs={10} sm={5} >
          <ButtonPrimary onClick={e => window.location.href = 'mailto:hola@teatreritos.com'}>Teatrerito ruiseñor</ButtonPrimary>
          <p>
            Clases de canto personalizadas por mensaje directo.
          </p>
        </Grid>
        <Grid item xs={10} sm={5}>
          <ButtonSecondary onClick={e => window.location.href = 'mailto:hola@teatreritos.com'}>Teatrerito saltimbanqui</ButtonSecondary>
          <p>
            Clases de danza personalizadas por mensaje directo.
          </p>
        </Grid>
      </Content>
    </Container>
  )
}
const Container = styled('div')({
  padding: ' 100px 40px',
  background: '#db3832',
  '& p': {
    display: 'block',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '80%',
    margin: '10px auto'
  },
  ['@media (max-width:500px)']: {
    padding: '30px 10px',
  }
})

const Content = styled(Grid)({

})

const TypographyStyled = styled(Typography)({
  color: '#fcee21',
  marginBottom: '20px',
})

const ButtonPrimary = styled(ButtonBase)({
  color: "#fff",
  background: "#00299f",
  width: "100%",
  padding: "20px",
  fontSize: "1.2em",
  borderRadius: "10px"
})

const ButtonSecondary = styled(ButtonPrimary)({
  background: '#29abe2'
})
export default Classes
