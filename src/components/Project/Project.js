import React from 'react'

const Project = ({name, description, url, updatedAt}) => {
	updatedAt = new Date(updatedAt)

	const handleClick = () => {
		window.open(url, "_blank")
	}

	return (
		<React.Fragment>
			<div 
			className='project'
			onClick={handleClick}
			>
				<div className="icon fa-github" style={{position: 'fixed'}}></div>
				<h3> {name} </h3>
				<p>{description}</p>
			</div>
		</React.Fragment>		
	)
}

export default Project