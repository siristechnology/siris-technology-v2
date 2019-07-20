import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'
import { ThemeContext } from 'components/common'
import { Links} from './styles'

export default ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Links desktop={desktop} theme={theme}>
		<Link to="/#projects" activeClassName="current">
			Projects
		</Link>
		<Link to="/blog" activeClassName="current">
			Blog
		</Link>
		<Link to="/about" activeClassName="current">
		About
		</Link>
		<Link to="/contact" activeClassName="current">
		Contact
		</Link>
    </Links>
  )
}
