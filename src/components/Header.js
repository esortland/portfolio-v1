import PropTypes from 'prop-types'
import React from 'react'
const name = ' ES'
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-terminal">{name}</span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>I am Eric Sortland</h1>
        {/* <p>
          Undergraduate Student  
          <br></br>
          SC Researcher  
          <br></br>
          Full Stack Developer 
          <br></br>
          Constant Learner 
        </p> */}
        <ul>
          <li>Undergraduate Student</li>
          <li>SC Researcher</li>
          <li>Full Stack Developer</li>
          <li>Constant Learner</li>
        </ul>
      </div>
    </div>
    <nav>
      <ul style={{paddingLeft: '0.25rem'}}>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me  
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('education')
            }}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('experience')
            }}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
    <div style={{position: 'static', marginTop: '1.5rem'}}>
    <ul className="icons">
      <li>
        <a 
          href='http://www.linkedin.com/in/ericsortlandumn/'
          className="icon fa-linkedin">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a 
          href="mailto:esortlan@gmail.com" 
          className="icon fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/esortland"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
