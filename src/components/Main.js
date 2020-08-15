import PropTypes from 'prop-types'
import React from 'react'
import profile from '../images/profile.jpeg'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <img className="profile_pic" src={profile} alt="Profile Picture" />
          <p>
            Hi! My name is Eric Sortland. I am a senior studying Computer Science
            at the University of Minnesota, Twin Cities. I am interested in building 
            data driven applications that provide impactful solutions and unique insights to 
            their end users.  
          </p>
          <br/>
          <p>
            To supplement my CS degree, I am pairing it with a minor in Mathematics.  
            Outside of my studies, I am conducting social computing research with the 
            GroupLens research lab, most recently as a member of the Flip*Doubt team. 
          </p>
          <br/>
          <h4>Some Tech I have worked With:</h4>
          <ul className="tech">
            <li>ReactJS</li>
            <li>C</li>
            <li>Java</li>
            <li>NodeJS</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Jest/Enzyme</li>
            <li>JUnit</li>
            <li>Docker</li>
            <li>Spring Boot</li>
          </ul>
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <p>
            I am currently in my senior year at the University of Minnesota, Twin Cities.
            I am pursuing a B.S. in Computer Science with an emphasis in Software Engineering
            and Data Systems. Along with my CS major, I am pursing a minor in Mathematics.
          </p>
          <br/>
          <br/>
          <h4>Relevant Coursework:</h4>
          <ul className="classwork">
            <li>Algorithms and Data Structures</li>
            <li>Adv. Programming Principles</li>
            <li>Intro to Operating Systems</li>
            <li>Machine Architecture and Organization</li>
            <li>Applied Linear Algebra</li>
            <li>Theory of Probability and Statistics</li>
            <li>Multivariable Calculus</li>
          </ul>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none'}}
        >
          <h2 className="major" style={{margin: 'auto', marginBottom: '3rem'}}>Experience</h2>
          <Experience />
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', maxHeight: 'fit-content' }}
        >
          <h2 className="major">Projects</h2>
          <Projects/>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
