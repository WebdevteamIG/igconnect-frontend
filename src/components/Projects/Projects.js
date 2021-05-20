import React, { Component } from 'react'
import Project, {Heading} from './Project';

const data = require('./events.json');

export default class Projects extends Component{
    state = {
        projects: []
    };

    componentDidMount(){
        this.setState({
            projects: data //projects data maybe fetch from server
        });
    }

    render(){
        return (
            <React.Fragment>
                <Heading />
                {this.state.projects.map(_item => (
                    <div className="shadow padding">
                        <center>
                            <h3>{_item.teamName}</h3>
                            <h4>{_item.description}</h4>
                        </center>
                        <div>
                            {_item.projects.map((item) => (
                                <Project project={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}