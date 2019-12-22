import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
      </Switch>
    </>
  )
}

export default App;
