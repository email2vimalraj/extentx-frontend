import React, { Component } from 'react'
import _ from 'lodash'
import { Col, Panel, Label } from 'react-bootstrap'
import { PieChart, Pie, Cell, Legend } from 'recharts'

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

        let pieData = [
            { name: 'Pass', value: reportStat.pass, color: '#50C878' },
            { name: 'Fail', value: reportStat.fail, color: '#C21807' }
        ]

        return (
            <Col xs={12} sm={12} md={4} lg={4}>
                <Panel header={title} bsStyle={panelStyle}>
                    <center>
                        <h4>Total Runs: <Label bsStyle='info'>{this.props.project.reports.length}</Label></h4>
                        <PieChart width={300} height={200}>
                            <Pie 
                                data={pieData} 
                                dataKey="value"
                                fill="#8884d8" 
                                label>
                                {
                                    pieData.map((entry, index) => 
                                        <Cell key={index} fill={entry.color} />
                                    )
                                }
                            </Pie>
                            <Legend />
                        </PieChart>
                    </center>
                </Panel>
            </Col>
        );
    }

}

export default Project;
