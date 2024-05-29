import {useState} from 'react'
// import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  FormContainer,
  InputContainer,
  Heading,
  Input,
  Label,
} from '../Login/styledComponents'

import {SignUpBtn} from './styledComponents'

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userDetails, setUserDetails] = useState({})

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    setUserDetails({userName, password})
    localStorage.setItem('userData', JSON.stringify(userDetails))
  }

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={onSubmitForm}>
          <Heading>Sign Up</Heading>
          <InputContainer>
            <Label htmlFor="userName">User Name</Label>
            <Input type="text" id="userName" onChange={onChangeUserName} />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" onChange={onChangePassword} />
            <SignUpBtn type="submit">SignUp</SignUpBtn>{' '}
          </InputContainer>
        </FormContainer>
      </MainContainer>
    </>
  )
}

export default SignUp
