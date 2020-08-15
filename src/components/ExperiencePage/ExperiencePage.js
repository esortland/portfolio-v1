import React from 'react'


const target = 
	<React.Fragment>
		<h3 className='title'>Software Engineering Intern</h3>
		<h4 className='employer'>Target</h4>
		<h4 className='timeline'>Jun 2020 - Aug 2020</h4>
		<hr/>
		<div className='job_description'>
			<p>
				Completed front and back end stories as a member of the Assortment Planning Experience 
				Team (APEX), utilizing tech such as React, NodeJS, Spring Boot, Java, and MongoDB. 
			</p>
			<br/>
			<p>
				Propsed a larger project of redesigning the Create Assortment Plan
				core component and its children. Leveraging Formik, I was able to simplify 
				all form logic into one componenet where previously it was split into three.
				This resulted in improved code readability, maintainablitiy, and overall 
				user experience.
			</p>
			<br/>
			<p>
				Performed front and backend unit testing to maintain 100% code coverage 
				with Jest, Enzyme, and JUnit.
			</p>
		</div>
	</React.Fragment>

const groupLens = 
	<React.Fragment>
		<h3 className='title'>Undergraduate Student Researcher</h3>
		<h4 className='employer'>Group Lens</h4>
		<h4 className='timeline'>Aug 2019 - May 2020</h4>
		<hr/>
		<div className='job_description'>
			<p>
				Worked alongside GroupLens graduate and undergraduate researchers
				on social computing projects and studies 
			</p>
			<br/>
			<p>
				Contributed to the development of Flip*Doubt, a web application 
				built upon React, NodeJS, Express, and MongoDB,
				tasked with collecting negative user thoughts and reframing them 
				in a poisitve light using the Mechanical Turk API
			</p>
		</div>
	</React.Fragment>

const uofm = 
	<React.Fragment>
		<h3 className='title'>Undergraduate Research Fellow</h3>
		<h4 className='employer'>U of M Math Dept.</h4>
		<h4 className='timeline'>May 2019 - Aug 2020</h4>
		<hr/>
		<div className='job_description'>
			<p>
				Worked under Dr. William Leeb on an exploration of statistical 
				methods leveraging computational resources and knowledge
			</p>
			<br/>
			<p>
				Proved the James-Stein estimator is a more accurate mean estimator
				of a multivariate normal distribution than a Least-Squares approach
			</p>
			<br/>
			<p>
				Wrote a python script to run Monte Carlo simulations on random synthetic 
				data to see increased accuracy rates compared to the Least-Squares Method
			</p>
		</div>
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