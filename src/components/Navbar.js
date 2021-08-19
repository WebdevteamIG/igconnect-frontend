import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import nitw from './nitwlogo.png';
import iglogo from './images/IG-logo-WITHOUT-BG.png';
import c4ii from './images/C4II.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className=''>
        <nav className='navbar navbar-light navbar-expand-lg'>
          <Link to={`${process.env.PUBLIC_URL}/`} className='logo '>
            <img src={nitw} alt='Nitw' width='80px' height='80px' />
            <img
              src={c4ii}
              alt='Innovation garage logo 2'
              width='130px'
              height='85px'
              className='ml-3 mr-4'
              id='ig-logo'
            />
            <img
              src={iglogo}
              alt='Innovation garage logo 2'
              width='70px'
              height='80px'
            />
          </Link>

          <div className='' id='dvNAvMenu'>
            <ul className='navbar-nav '>
              <li className='nav-item '>
                <Link to={`${process.env.PUBLIC_URL}/`} className='nav-link'>
                  HOME
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/projects`}
                  className='nav-link'
                >
                  PROJECTS
                </Link>
              </li>

              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/startups`}
                  className='nav-link'
                >
                  START UPS
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/events`}
                  className='nav-link '
                >
                  EVENTS
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/forms`}
                  className='nav-link'
                >
                  FORMS
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/podcasts`}
                  className='nav-link '
                >
                  PODCASTS
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/team`}
                  className='nav-link '
                >
                  TEAM
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to={`${process.env.PUBLIC_URL}/about`}
                  className='nav-link'
                >
                  ABOUT
                </Link>
              </li>

              {/* <li className="nav-item ">
                <Link to="/about" className="nav-link">
                  BLOG
              </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
