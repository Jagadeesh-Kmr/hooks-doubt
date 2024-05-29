import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = localStorage.getItem('userData')
  if (token === undefined) {
    console.log('Logged')
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
