import  React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExperiencePage from '../ExperiencePage/ExperiencePage'

const Experience = props => {
	const [page, setPage] = useState(0)

	return(
		<React.Fragment>
				<nav>
					<ul>
						<li>
							<button
								onClick={() => {
									setPage(0)
								}}
							>
								Target  
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setPage(1)
								}}
							>
								Group Lens
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setPage(2)
								}}
							>
								U of M Math Dept.
							</button>
						</li>
					</ul>
				</nav>
				<ExperiencePage page={page} />
		</React.Fragment>
	)
}
export default Experience