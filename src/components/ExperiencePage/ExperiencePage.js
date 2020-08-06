import React, {useState} from 'react'


const target = 
	<React.Fragment>
		<h3 className='title'>Software Engineering Intern</h3>
		<h4 className='employer'>Target</h4>
		<h4 className='timeline'>Jun 20202 - Aug 2020</h4>
		<hr/>
		<div className='job_description'>
		<p>
			As a member of the Assortment Planning Experience Team (APEX)
			I completed stories for both the front and back end utilizing tech
			such as React, NodeJS, Spring Boot, Java, and MongoDB. 
		</p>
		<br/>
		<p>
			Propsed a larger project of redesigning the Create Assortment Plan
			core compnenet and its children. Leveraging Formik I was able to simplify 
			all form logic into one componenet where previously it was split into three.
			This resulted in improved code readability, maintainablitiy, and overall 
			user experience.
		</p>
		<br/>
		<p>
			Performed front and backend unit testing to maintain 100% code coverage 
			with Jest, Enzyme, and JUnit
		</p>
		</div>
	</React.Fragment>

const groupLens = 
	<React.Fragment>
		<h3 className='title'>Undergraduate Student Researcher</h3>
		<h4 className='employer'>Group Lens</h4>
		<h4 className='timeline'>Aug 2019 - May 2020</h4>
		<hr/>
		<p>Descrption</p>
	</React.Fragment>

const uofm = 
	<React.Fragment>
		<h3 className='title'>Undergraduate Research Fellow</h3>
		<h4 className='employer'>U of M Math Dept.</h4>
		<h4 className='timeline'>May 2019 - Aug 2020</h4>
		<hr/>
		<p>Description</p>
	</React.Fragment>

const pages = [
	target,
	groupLens,
	uofm
]

const ExperiencePage = props => {
	return (
		<div className='page'>
			{pages[props.page]}
		</div>
	)
}

export default ExperiencePage