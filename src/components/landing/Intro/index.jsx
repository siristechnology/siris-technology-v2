import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer, ThemeContext } from 'components/common'
import { MagicalButton, Wrapper, Flex } from './styles'

export const Intro = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<Wrapper theme={theme} as={SmallerContainer}>
			<h1>We build world-class software for you!</h1>
			<p>We help imagine and create digital products people love to use.</p>
			<MagicalButton as={Link} to="/contact">
				Get In Touch
			</MagicalButton>
		</Wrapper>
	)
}
