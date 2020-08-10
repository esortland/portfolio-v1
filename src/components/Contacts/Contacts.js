import React from 'react'

const Contacts = () => {
    return (
			<div className="contacts">
				<ul className="icons">
					<li>
						<a 
								href='http://www.linkedin.com/in/ericsortlandumn/'
								target='_blank'
								className="icon fa-linkedin">
								<span className="label">LinkedIn</span>
						</a>
					</li>
					<li>
						<a 
								href="mailto:esortlan@gmail.com" 
								target="_blank"
								className="icon fa-envelope">
								<span className="label">Email</span>
						</a>
					</li>
					<li>
						<a
								href="https://github.com/esortland"
								target="_blank"
								className="icon fa-github"
						>
								<span className="label">GitHub</span>
						</a>
					</li>
				</ul>
			</div>
    )
}

export default Contacts