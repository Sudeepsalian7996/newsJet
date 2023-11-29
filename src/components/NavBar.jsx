import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Switch} from 'antd';

export default function NavBar({modeHandler, mode, searchHandler}) {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue)
    modeHandler()
  }

  const searchInput = (e) => {
    searchHandler(e.target.value)
  } 
  
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${mode === true ?'text-light bg-dark':'bg-body-tertiary'}`}>
        <div className="container-fluid">
            <Link className={`navbar-brand ${mode === true ? 'text-light' : ''}`} to="/">NewsJet</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link active ${mode === true ? 'text-light' : ''}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${mode === true ? 'text-light' : ''}`} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${mode === true ? 'text-light' : ''}`} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${mode === true ? 'text-light' : ''}`} aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${mode === true ? 'text-light' : ''}`} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${mode === true ? 'text-light' : ''}`} to="/technology">Technology</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input onChange={searchInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div>
              {mode === true ? (
              <span className='mx-2'>Light Mode: </span>) : (
                <span className='mx-2'>Dark Mode: </span>
              )}
              <Switch size='small'
              checked={switchValue}
              onChange={handleSwitchChange}
              ></Switch>
            </div>
            </div>
        </div>
     </nav>
  )
}
