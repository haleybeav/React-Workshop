import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';
import Section from './Section';

const Course = ({courses}) => (
  <PanelGroup>
    {courses.map((course) => 
      <Panel>
        <Panel.Heading>
          <Panel.Title toggle>{course.abrv} - {course.name}, {course.credits}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <Section sections={course.sections}/>
        </Panel.Body>
      </Panel>
    )}
  </PanelGroup>
);

export default Course;