import React from 'react';
import Course from './Course';

const View = ({courses, term, dept}) => {
  let filtered_courses = courses.filter((course) => {
    return course.dept === dept;
  });

  for (var i = 0; i < filtered_courses.length; i++) {
    let filtered_sections = filtered_courses[i].sections.filter((section) => {
      return section.term === term;
    });
    if (filtered_sections.length > 0) {
      filtered_courses[i].sections = filtered_sections;
    } else {
      filtered_courses.splice(i,1);
    }
  }

  if (filtered_courses.length === 0) {
    return(<h1>Nothing to see here!</h1>);
  }

  return (<Course courses={filtered_courses}/>);
};

export default View;