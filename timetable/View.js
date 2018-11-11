import React from 'react';
import Course from './Course';
import { cloneDeep } from "lodash";

const View = ({courses, term, dept}) => {
  let filtered_courses = cloneDeep(courses).filter((course) => {
    return course.dept === dept;
  });

  let final_filtered_courses = [];
  for (var i = 0; i < filtered_courses.length; i++) {
    let filtered_sections = filtered_courses[i].sections.filter((section) => {
      return section.term === term;
    });
    
    if (filtered_sections.length > 0) {
      final_filtered_courses.push(filtered_courses[i]);
      filtered_courses[i].sections = filtered_sections;
    }
  }

  console.log("final:", final_filtered_courses);

  if (final_filtered_courses.length === 0) {
    return(<h1>Nothing to see here!</h1>);
  }

  return (<Course courses={final_filtered_courses}/>);
};

export default View;