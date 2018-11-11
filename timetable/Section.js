import React from 'react';
import { Table } from 'react-bootstrap';

const Section = ({sections}) => {
  const attr = ['term', 'crn', 'instructor', 
                'room', 'days', 'time', 'cap', 
                'enrl','avail'];

  return (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        {attr.map((a) => 
          <th key={a}>{a}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {sections.map((section) =>
        <tr key={section.crn}>
          {attr.map((a) => 
            <td key={a}>
              {section[a]}
            </td>
          )}
        </tr>
      )}
    </tbody>
  </Table>
  );};

export default Section;