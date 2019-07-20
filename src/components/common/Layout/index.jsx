import React from 'react'
import styled from 'styled-components'
import { ThemeContext, Provider, Subscribe } from 'components/common'
import { Header, Footer } from 'components/theme'
import './layout.scss'
import './main.scss'

export const Layout = ({ children }) => (
	<Provider>
		<ThemeContext.Consumer>
			{({ theme }) => (
				<>
					<Header />
					<LayoutStyled theme={theme}>
						{children}
					</LayoutStyled>
					<Footer />
				</>
			)}
		</ThemeContext.Consumer>
	</Provider>
)

const LayoutStyled = styled.div`
	width: 100%;
	padding-top: 7rem;

	${({ theme }) =>
		theme === 'dark' &&
		`
		background: #212121;
	`};
`
