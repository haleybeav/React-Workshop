import React from 'react';
import { Table } from 'react-bootstrap';

const Section = ({sections}) => {
  const attr = ['term', 'crn', 'instructor', 
                'room', 'days', 'time', 'cap', 
                'enrl','avail'];

  /*
  let filtered_sections = sections.filter((section) => {
     return section.term === term;
  });
  */

  return (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        {attr.map((a) => 
          <th>{a}</th>  
        )}
      </tr>
    </thead>
    <tbody>
      {sections.map((section) =>
        <tr>
          {attr.map((a) => 
            <td>
              {section[a]}
            </td>
          )}
        </tr>
      )}
    </tbody>
  </Table>
  );};

export default Section;