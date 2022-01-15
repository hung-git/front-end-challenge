import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <div>
          <Link to="/">
            <h3 className="title">Spacestagram</h3>
          </Link>
          
          <br/>
          <p className="tag-line">Brought to you by NASA's image API</p>
        </div>
        <div className="links">
          <Link to="/about"><h3>About Me</h3></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
