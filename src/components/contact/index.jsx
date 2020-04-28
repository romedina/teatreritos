import React, { useState } from 'react'
import { Modal, CircularProgress } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import conejo from '../../assets/conejo.svg'
import caja from '../../assets/caja.svg'
import gorra from '../../assets/gorra.svg'
import { ButtonBase } from '@material-ui/core'
import { addMessage } from '../../firebase'
import { Alert } from '@material-ui/lab'
import validarEmail from '../../helpers/validateEmail'

const Contact = props => {
  const [currentView, setCurrentView] = useState('form')
  const [error, setError] = useState(null)
  const [data, setData] = useState({})

  const onEmailChange = event => {
    setData({
      ...data,
      email: event.target.value
    })
  }

  const onNameChange = event => {
    setData({
      ...data,
      name: event.target.value
    })
  }

  const onNumberChange = event => {
    var val = event.target.value
    val = parseInt(val)
    val = isNaN(val) ? null : val
    setData({
      ...data,
      number: val
    })
  }

  const setAlert = message => {
    setError(message)
    setTimeout(event => setError(null), 5000)
  }

  const onSend = async event => {
    const { name = '', email='', number = '' } = data;
    if (!name.length || !number.toString().length || !email.length) return setAlert('Todos los campos son requeridos')
    if (number.toString().length < 10) return setAlert('El teléfono no es válido')
    if (!validarEmail(email)) return setAlert('El correo electrónico no es válido')
    setCurrentView('loading')
    await addMessage(data)
    setCurrentView('success')
  }

  return (
    <ModalStyled open={props.open} onClose={props.onClose}>
      <Body currentView={currentView}>
        {currentView === 'form' && (
          <Form>
            <Title>Contáctanos</Title>
            {error && (
              <Alert severity='error'>{error}</Alert>
            )}
            <InputGroup>
              Nombre
              <InputFake><Icon src={conejo}/>
                <Input maxLength={50} onChange={onNameChange} value={data.name || ''} />
              </InputFake>
            </InputGroup>
            <InputGroup>
              Correo electrónico
              <InputFake><Icon src={caja}/>
              <Input maxLength={50}onChange={onEmailChange} value={data.email || ''} />
              </InputFake>
            </InputGroup>
            <InputGroup>
              Número de teléfono
              <InputFake><Icon src={gorra}/>
                <Input maxLength={10} onChange={onNumberChange} value={data.number || ''} />
              </InputFake>
            </InputGroup>
            <InputGroup>
              <Button onClick={onSend}>Enviar</Button>
            </InputGroup>
          </Form>
        )}
        {currentView === 'loading' && (
          <CircularProgress />
        )}
        {currentView === 'success' && (
          <div>
            <SuccessText>¡Gracias por contactarnos!</SuccessText>
            <SuccessSubText>Tu mensaje ha sido enviado correctamente</SuccessSubText>
            <PictureSuccess src={caja}/>
          </div>
        )}
      </Body>
    </ModalStyled>
  )
}

export default Contact

const Body = styled('div')({
  width: '90%',
  maxWidth: '500px',
  height: '400px',
  padding: '60px',
  outline: 'none',
  borderRadius: '10px',
  background: props => props.currentView === 'success' ? '#00299f' : '#29aae1',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  '@media (max-width:400px)': {
    padding: '20px',
  }
})

const ModalStyled = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const Form = styled('div')({
  width: '100%',
})

const Title = styled('h2')({
  color: '#f2f026',
  textAlign: 'center',
})

const InputGroup = styled('div')({
  marginBottom: '15px',
  color: '#023993',
  fontWeight: 'bold',
})

const InputFake = styled('div')({
  display: 'flex',
  background: '#fff',
  borderRadius: '5px',
  marginTop: '5px',
  overflow: 'hidden',
  paddingLeft: '10px'
})

const Icon = styled('img')({
  minWidth: '25px',
  width: '25px',
  marginRight: '10px'
})

const Input = styled('input')({
  width: "100%",
  border: "none",
  padding: "11px",
  outline: "none"
})

const Button = styled(ButtonBase)({
  background: "#ff6b01",
  width: "200px",
  margin: "auto",
  display: "block",
  padding: "4px",
  fontSize: "1.1em",
  borderRadius: "5px",
  color: "#fff"
})

const SuccessText = styled('h2')({
  color: '#fdea2c',
  textAlign: 'center',
})

const SuccessSubText = styled('h3')({
  color: '#ac5b3d',
  textAlign: 'center',
})

const PictureSuccess = styled('img')({
  width: '100px',
  display: 'block',
  margin: 'auto',
})