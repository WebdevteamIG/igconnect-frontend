  import React from 'react';
import ig_logo from './ig-logo.jpeg';
import 'bootstrap';

const Form = (props) => {
  return (
    <div className='what formlist'>
      <div className='box_image'>
        <img
          style={{ backgroundColor: 'white' }}
          src={ig_logo}
          alt='Innovation Garage'
        />
      </div>
      <div className='box_form'>
        <div className='form_head'>
          <div className='form_title'>{props.title}</div>
          <div className='form_team_name'>CII</div>
        </div>

        <div className='form_desc'>{props.title} </div>
        <div className='form_footer'>
          {/* <div className='form_deadline'> */}
          {/* <Timer deadline='3 August 2022 23:00:00' /> */}
          {/* deadline format: dd Month yyyy hh:mm:ss */}
          {/* </div> */}
          <a href={props.url} className='primary'>
            Fill the Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
