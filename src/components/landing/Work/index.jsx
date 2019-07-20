import React from 'react'
import { graphql } from 'gatsby'
import { Container, Subtitle } from 'components/common'
import SideProjects from './SideProjects'

export const imageFields = graphql`
	fragment imageFields on ImageSharp {
		fluid(maxWidth: 630) {
			tracedSVG
			aspectRatio
			src
			srcSet
			sizes
		}
	}
`

export const Work = () => (
	<Container id="projects">
		<Subtitle>Projects</Subtitle>
		<SideProjects />
	</Container>
)
