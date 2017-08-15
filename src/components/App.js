import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import ProjectList from './ProjectList'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={ProjectList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
