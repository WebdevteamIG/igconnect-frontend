import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './index.css';
import FormList from './Formlist';

const Forms = (props) => {
  const [value, setTeamName] = useState('');
  const [filter, setFilter] = useState(false);
  const [allforms, setAllforms] = useState([[], [1, 2, 3]]);

  useEffect(() => {
    async function getForms() {
      var resp = await fetch(
        `https://sheetman.glitch.me/sheets/getform?id=all`
      );
      var response = await resp.json();
      setAllforms(response.values);
    }
    getForms();
  });

  // const handleSubmit = (event) => {
  //   var matchingTeams = Forms.map((form) => {
  //     if (form.team === value) {
  //       return form.id;
  //     }
  //   });
  // var filtered = matchingTeams.filter(function (x) {
  //   return x !== undefined;
  // });
  //   console.log('hello');
  //   setFilter(true);
  //   setShowClear(true);
  //   event.preventDefault();
  // };

  const handleChange = (event) => {
    setTeamName(event.target.value);
    console.log(value);
    // setShowClear(true);
    setFilter(true);
  };

  //Add a null check in case this gives an error
  var Data = allforms
      .slice(0)
      .reverse()
      .map((form) => {
        if (form[3] !== '') return form[3];
        else {
          return null;
        }
      }),
    MakeItem = function (X) {
      return <option>{X}</option>;
    };

  return (
    <>
      <Navbar />
      <h1 className='title' style={{ textAlign: 'center', fontWeight: '600' }}>
        FORMS
      </h1>
      <div className='searchContainer'>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <label>
            Filter by Title:
            <select
              className='searchDropDown select-css'
              value={value}
              onChange={handleChange}
            >
              <option value='' disabled selected>
                Filter Forms by Title
              </option>
              {Data.map(MakeItem)}
              {/* <option value="Team Cybsec">Team Cybsec</option>
            <option value="Team Nevronas">Team Nevronas</option>
            <option value="Tech Team">Tech team</option>
            <option value="Design Team">Design team</option>
            <option value="CII Website Team Page Details">CII Website Team Page Details</option> */}
            </select>
          </label>
          <button
            type='submit'
            value='Submit'
            // onClick={handleSubmit}
            className=' primary btn'
          >
            Submit
          </button>

          <button
            type='clear'
            className='btn btn-sm secondary'
            value='Clear Filter'
            onClick={(event) => {
              event.preventDefault();
              setFilter(false);
              setTeamName('');
            }}
          >
            Clear Filter
          </button>
        </form>
      </div>
      <FormList filtername={value} isFilter={filter}></FormList>
      <Footer />
    </>
  );
};
export default Forms;
