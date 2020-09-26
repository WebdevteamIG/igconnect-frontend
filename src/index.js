import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Events from './Events';
import EventsCalender from'./EventsCalender.js';
import Footer from './Footer.js';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>
    <Events />
  </React.StrictMode>,
  document.getElementById('event')
);
ReactDOM.render(
  <React.StrictMode>
    <EventsCalender />
  </React.StrictMode>,
  document.getElementById('eventcalender')
);
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();/
