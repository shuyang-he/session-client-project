import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/home/HomeContainer'
import Register from './components/register/Register'
import Login from './containers/login/LoginContainer'

const App = () => {
  return (
    <Switch>
      <Route exact to='/'>
        <Home />
      </Route>
      <Route exact to='/register'>
        <Register />
      </Route>
      <Route exact to='/login'>
        <Login />
      </Route>
    </Switch>
  )
}

export default App
