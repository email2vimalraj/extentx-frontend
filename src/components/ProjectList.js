import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Project from './Project'

class ProjectList extends Component {

    render() {
        if (this.props.allProjectsQuery && this.props.allProjectsQuery.loading) {
            return <div>Loading</div>
        }

        if (this.props.allProjectsQuery && this.props.allProjectsQuery.error) {
            return <div>Error</div>
        }

        const projectsToRender = this.props.allProjectsQuery.project

        return (
            <div>
                {projectsToRender.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        )
    }

}

const ALL_PROJECTS_QUERY = gql `
    query AllProjectsQuery {
        project {
            id
            name
        }
    }
`

export default graphql(ALL_PROJECTS_QUERY, { name: 'allProjectsQuery' }) (ProjectList)
