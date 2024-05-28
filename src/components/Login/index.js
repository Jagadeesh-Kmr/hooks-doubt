import {useState} from 'react'
import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  FormContainer,
  Heading,
  Label,
  Input,
  InputContainer,
  Button,
  ErrorMessage,
  LoginDetails,
} from './styledComponents'

const Login = () => {
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = () => <Redirect to="/" />

  const onSubmitFailure = error => {
    setErrorMsg(error)
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    const userDetails = {username: userName, password}
    const userDetail = JSON.parse(localStorage.getItem('userData'))
    console.log(userDetail, userDetails)

    if (userDetail === userDetails) {
      onSubmitSuccess()
    } else {
      onSubmitFailure('Invalid Details')
    }
  }

  if (localStorage !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <MainContainer>
      <LoginDetails>
        <p>Username: rahul</p>
        <p>Password: rahul@2021</p>
      </LoginDetails>
      <FormContainer onSubmit={onSubmitForm}>
        <Heading>Login Form</Heading>
        <InputContainer>
          <Label htmlFor="userName">Enter UserName </Label>
          <Input
            type="text"
            id="userName"
            value={userName}
            onChange={onChangeUserName}
          />
          <Label htmlFor="password">Enter Password </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputContainer>
        <ErrorMessage>{errorMsg}</ErrorMessage>
        <Button type="submit">Login</Button>
      </FormContainer>
    </MainContainer>
  )
}

export default Login
