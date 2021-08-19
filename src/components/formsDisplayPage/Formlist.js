import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import Form from './Form';
import Spinner from './Spinner';
//getting data from the spreadsheet directly

const FormList = (props) => {
  const [allforms, setAllforms] = useState([[], [1, 2, 3]]);
  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [filterName, setFilterName] = useState(' ');
  useEffect(() => {
    async function getForms() {
      var resp = await fetch(
        `https://sheetman.glitch.me/sheets/getform?id=all`
      );
      var response = await resp.json();
      setAllforms(response.values);
      setLoading(false);
    }
    getForms();
    setIsFilter(props.isFilter);
  }, [props.filtername, props.isFilter]);

  if (loading) return <Spinner />;
  else
    return allforms
      .slice(0)
      .reverse()
      .map((form, id) => {
        if (
          form.length !== 0 &&
          (isFilter ? form[3] === props.filtername : true)
        ) {
          return (
            <Form
              title={form[3]}
              url={`https://nitw.ac.in/cii/forms/${form[2]}`}
              desc={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex '
              }
              id={id}
              team={'Team CybSec'}
            ></Form>
          );
        } else {
          return <div></div>;
        }
      }, []);
};
export default FormList;
