import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
		<footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
			<ul className="info">
				<li>
						Code on <a target="_blank" href="https://www.github.com/esortland/portfolio-v1">GitHub</a>. 
				</li>
				<li>
						Created by <a target="_blank" href="https://www.github.com/esortland">Eric Sortland</a>
				</li>
				<li>
						Built with <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby.js</a>
				</li>
			</ul>
		</footer>
)

Footer.propTypes = {
		timeout: PropTypes.bool
}

export default Footer
