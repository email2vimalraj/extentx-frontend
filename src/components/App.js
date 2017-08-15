import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid, Row } from 'react-bootstrap'
import Header from './Header'
import ProjectList from './ProjectList'

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Grid>
            <Row>
              <Switch>
                <Route exact path='/' component={ProjectList} />
              </Switch>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default App;
