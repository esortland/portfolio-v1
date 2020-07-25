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
        <p>
          Undergraduate Student 
          <br></br>
          HCI Researcher 
          <br></br>
          Full Stack Developer
          <br></br>
          Constant Learner
        </p>
      </div>
    </div>
    <nav>
      <ul>
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
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact  
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
