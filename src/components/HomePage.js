import React, { Component } from 'react';
import Blog from './Blog';
import Events from './Events';
import Project from './Project';
import Footer from './Footer';
import firstimage from './images/first+image.png';
import Navbar from './Navbar';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <a
            href='https://drive.google.com/file/d/1dI-uytJ8LvVXyQytrj-wflDmjs4gC-qf/view?usp=sharing'
            target='blank'
            className='btn btn-secondary'
            style={{ margin: '30px 20px', justifyContent: 'center', display: 'flex' }}
          >
            Click here to view our latest ARIIA report
          </a>
        </div>
        <div className='row '>
          {/* text div */}
          <div className='col-lg-5 col-sm-12' id='mainHomeDiv'>
            <div className='headings-container mt-5 pt-2  '>
              <h1 className='text-uppercase'>Ideate</h1>
              <h1 className='text-uppercase'>Innovate</h1>
              <h1 className='text-uppercase'>Incubate</h1>
            </div>
            <p className='ml-3  text-justify'>
              We are an incubation center that strives to promote innovations
              that have a direct impact on society, We do this by providing a
              platform for young and passionate innovators to incubate their
              startup and assist them at every step. From assisting innovators
              in acquiring the skills required to make their idea a reality to
              Intellectual Property Rights Cell, We have it all.
            </p>
            {/* <button className="mybtn mt-3"> LEARN MORE ABOUT US<i className="fas fa-angle-double-right ml-2"></i></button> */}
          </div>

          {/* graphic div */}
          <div className='col-lg-7 col-sm-12 text-right mt-3'>
            <img
              src={firstimage}
              alt='Innovation garage logo 2'
              width='320px'
              height='500px'
              className='right-graphics-position img-fluid'
            />
            {/* <img src={`${process.env.PUBLIC_URL}/img/first+image.png`} alt="Innovation garage logo 2" width="487px" height="943px" /> */}

            <div className='social-icons-container'>
              {/* facebook */}
              <a
                href='https://www.facebook.com/TheInnovationGarage'
                className='icon-button'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              {/* insta */}
              <a
                href='https://www.instagram.com/ig.nitw/'
                className='icon-button'
              >
                <i className='fab fa-instagram'></i>
              </a>
              {/* linkedin */}
              <a
                href='https://www.linkedin.com/company/ignitw'
                className='icon-button'
              >
                <i className='fab fa-linkedin '></i>
              </a>
              <a
                href='https://linktr.ee/ig.nitw'
                className='icon-button'
                id='last-social-icon'
              >
                <i className='fas fa-link fab'></i>
              </a>
              {/* <i class="fab fa-twitter-square"></i> */}
            </div>
          </div>
        </div>

        <Events />
        <Project />
        <Blog />
        <Footer />
      </div>
    );
  }
}