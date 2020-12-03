import React from 'react'

export const Navigation = ({ lang, changeLang }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h1 className="navbar-brand mx-auto" to="/">{lang.header.title}</h1>
                <span type="button" className="nav-item nav-link text-info pointer" onClick={changeLang} >{lang.header.lang}</span>
            </div>
        </nav>
    )
}
