import React, { useContext } from 'react'
import { ThemeContext } from 'components/common'
import { StyledSubtitle } from './styles'

export const Subtitle = ({ children, active }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<StyledSubtitle theme={theme} active={active}>
			{children}
		</StyledSubtitle>
	)
}
