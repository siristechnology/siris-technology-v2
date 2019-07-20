import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'components/common'

export const Github = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          repositoryOwner(login: "siristechnology") {
            repositories(
              first: 7
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <Subtitle>Open Source</Subtitle>
      <Project
        icon={GithubIcon}
        type="Github"
        projects={github.repositoryOwner.repositories.edges}
        link="https://github.com/siristechnology"
        color="#000"
        github
      />
    </Container>
  )
}
