import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(

  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








// import React from 'react';

// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import { Switch, Route } from "react-router-dom";

// import Navbar from './components/Navbar.js';
// import Contact from './components/Contact.js';
// import Innovations from './components/Innovations.js';
// import Footer from './components/Footer.js';

// function App() {
//   return (
//     <React.Fragment>
//       <Navbar ></Navbar>
//       <Contact ></Contact>
//       <Innovations ></Innovations>
//       <Footer></Footer>

//     </React.Fragment>

//   );
// }

// export default App;
