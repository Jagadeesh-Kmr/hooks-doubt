import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
