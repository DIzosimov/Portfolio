import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
      </Switch>
    </>
  )
}

export default App;
