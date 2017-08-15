import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Navbar } from 'react-bootstrap'

class Header extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">ExtentX</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                </Row>
            </Grid>
        );
    }

}

export default withRouter(Header)
