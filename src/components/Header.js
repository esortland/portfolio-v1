import PropTypes from 'prop-types'
import React from 'react'
import Contacts from './Contacts/Contacts'
const name = ' ES'
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-terminal">{name}</span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>I am Eric Sortland</h1>
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
      <Contacts/>
    </nav>
    
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
