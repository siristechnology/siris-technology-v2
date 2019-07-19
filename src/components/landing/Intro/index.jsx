import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, SmallerContainer, ThemeContext, Button } from 'components/common'
import { IntroWrapper, MagicalButton, Wrapper, Flex, Details, Thumbnail } from './styles'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import dev from 'Static/illustrations/dev.svg'

export const Intro = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<Wrapper theme={theme} as={SmallerContainer}>
			<IntroWrapper as={Container}>
			<Details>
			<h1>We build world-class software for you!</h1>
				<h4>We help imagine and create digital products people love to use.</h4>
				<MagicalButton as={AnchorLink} href="#contact">
					Get in touch
				</MagicalButton>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
