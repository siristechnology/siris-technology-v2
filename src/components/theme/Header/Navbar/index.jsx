import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, ThemeContext } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, Brand } from './styles'

export default () => {
	const { theme } = useContext(ThemeContext)
	return (
		<Wrapper as={Container}>
			<Brand as={Link} theme={theme} to="/">
				Siris Technology
			</Brand>
			<NavbarLinks desktop />
		</Wrapper>
	)
}
