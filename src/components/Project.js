import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Panel, Label } from 'react-bootstrap'

class Project extends Component {
    
    render() {
        let reportStat = {
            total: this.props.project.reports.length,
            pass: 0,
            fail: 0
        };

        _.map(this.props.project.reports, function(result) {
            if (result.failParentLength === 0) {
                reportStat.pass += 1;
            } else {
                reportStat.fail += 1;
            }
        });

        const title = (
            <h3>{this.props.project.name}</h3>
        );

        let panelStyle = 'success';

        if (reportStat.pass === 0) {
            panelStyle = 'danger';
        }

        return (
            <Col xs={12} sm={12} md={4} lg={4}>
                <Panel header={title} bsStyle={panelStyle}>
                    <p><Label bsStyle='info'>{this.props.project.reports.length}</Label> runs</p>
                    <p><Label bsStyle='success'>{reportStat.pass}</Label> passed</p>
                    <p><Label bsStyle='danger'>{reportStat.fail}</Label> failed</p>
                </Panel>
            </Col>
        );
    }

}

export default Project;
