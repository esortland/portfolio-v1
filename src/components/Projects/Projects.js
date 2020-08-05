import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Project from "../Project/Project";

const Projects = () => {
	const repo = useStaticQuery(graphql`
		query repoData {
			github {
				viewer {
				repositories(
						orderBy: { field: CREATED_AT, direction: DESC }
						privacy: PUBLIC
						first: 10
				) {
						edges {
						node {
							name
							description
							updatedAt
							url
							isPrivate
							id
						}
					}
				 }
				}
			}
		}
	`);


	const data = repo.github.viewer.repositories.edges.map(repo => repo.node);
	const projects = data.map((project, key) => {
		return (
				<Project
					name={project.name}
					description={project.description}
					updatedAt={project.updatedAt}
					url={project.url}
					key = {key}
				/>
		)
	})

	return (
		<React.Fragment>
			<div className="projects">
				{projects}
			</div>
		</React.Fragment>
	)    

}


export default Projects