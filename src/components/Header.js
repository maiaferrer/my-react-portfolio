import React from 'react'

export default function Header(props) {
  return (
   <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"> <button className="btn btn-link nav-link" onClick={() => props.setPage('about') }>about</button></li>
                    <li className="nav-item"> <button className="btn btn-link nav-link" onClick={() => props.setPage('portfolio') }>portfolio</button></li>
                    <li className="nav-item"> <button className="btn btn-link nav-link" onClick={() => props.setPage('contact') }>contact me</button></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
