const courses = [
  {
    abrv: "CSCI 141",
    name: "Programming with Python",
    credits: "4cr",
    sections: [
      {
        term: "Spring 2019",
        crn: "40374",
        days: "MWR",
        time: "9:00-9:50",
        instructor: "Filip Jagodzinski",
        room: "CF 120",
        cap: 25,
        enrl: 23,
        avail: 2
      },
      {
        term: "Spring 2018",
        crn: "234234",
        days: "MWR",
        time: "9:00-9:50",
        instructor: "Catherine Potts",
        room: "CF 120",
        cap: 25,
        enrl: 23,
        avail: 2
      }
    ],
    dept: "Computer Science"
  },
  {
    abrv: "CSCI 241",
    name: "Data Structures",
    credits: "4cr",
    sections: [
      {
        term: "Winter 2019",
        crn: "23",
        days: "MWR",
        time: "12:00-12:50",
        instructor: "Brian Hutchinson",
        room: "AW 305",
        cap: 25,
        enrl: 23,
        avail: 2
      }
    ],
    dept: "Computer Science"
  },
  {
    abrv: "CSCI 301",
    name: "Functional Programming",
    credits: "4cr",
    sections: [
      {
        term: "Fall 2018",
        crn: "411",
        days: "MWR",
        time: "12:00-12:50",
        instructor: "Geof Matthews",
        room: "AW 305",
        cap: 25,
        enrl: 23,
        avail: 2
      },
      {
        term: "Fall 2019",
        crn: "411123123",
        days: "MWR",
        time: "12:00-12:50",
        instructor: "Geof Matthews",
        room: "AW 305",
        cap: 25,
        enrl: 23,
        avail: 2
      }
    ],
    dept: "Computer Science"
  },
  {
    abrv: "ENG 101",
    name: "Writing & Composition",
    credits: "4cr",
    sections: [
      {
        term: "Fall 2018",
        crn: "40118",
        days: "MWR",
        time: "12:00-12:50",
        instructor: "Catherine McDonald",
        room: "AW 305",
        cap: 25,
        enrl: 23,
        avail: 2
      }
    ],
    dept: "English"
  }
];

module.exports = courses;
