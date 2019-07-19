import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Logo, ThemeContext } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, BrandLogo, Brand } from './styles'

export default () => {
	const { theme } = useContext(ThemeContext)
	return (
		<Wrapper as={Container}>
			<Brand as={Link} theme={theme} to="/">
				{/* <BrandLogo
					as={Logo}
					color={theme === 'dark' ? '#fff' : '#212121'}
					strokeWidth='1'
				/> */}
				Siris Technology
			</Brand>
			<NavbarLinks desktop />
		</Wrapper>
	)
}
