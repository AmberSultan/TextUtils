import React from 'react'
import { Link } from 'react-router-dom'; //import Link from react-router-dom

export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to=" ">{props.title}</Link>   {/*Link is used in place of "a" tag and to in place of "href" --> these are used to prevent page from load and load again if we click our navbar components as React creates a single page application */ }
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Enable Light mode' : 'Enable Dark mode'}</label>
</div>


    </div>
  </div>
</nav>

    </div>
  )
}
