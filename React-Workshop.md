# An Introduction to React Workshop

Haley Beavers, Franchine Ninh & Noah Strong
Novemebr 13, 2018

React is considered a JavaScript library developed by FaceBook for building user interfaces. It uses the idea of splitting up a web page into reusable components with JSX, HTML, and Javascript logic. React is unique in that it uses unidirectional data flow to create dynamic and responsive webpages. Since its inception circa 2015, React has come to surpass Angular as the leading JavaScript framework and many applications are now built partially or entirely using React, some examples include Instagram, FaceBook, and Netflix.

Today, we are going to explore the rudimentary ideas of React through an example near and dear to the hearts of many Western students; TimeTable.

For those of you who do not use TimeTable, it is an alternative to ClassFinder. Users can view all classes and sections available from a department during a selected term.

![alt text][timetablewwu]

[timetablewwu]: ./photos/wwutimetable.png "WWU Timetable web"

<!-- ![alt text][timetablementors]

[timetablementors]: ./photos/Timetable.png "Mentors Timetable web" -->

Using React, we will split TimeTable into logical pieces that can render dynamically. We will be using SandBox as our programming environment, but you can of course develop React applications in the eidtor of your choice. To follow along with us, visit this link: <https://codesandbox.io/s/8z56kz7z42>.

## Features of React Applications

### Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are like JavaScript functions. They accept arbitrary inputs, or props, and return React elements describing what should appear on the screen.

### Props

Props is short for properties. They are how components talk to each other. Props information flow downwards from the parent component.

### State

In App.js we store an object called state, this means that App.js is a stateful component. State is what makes React dynamic. Whenever data in state is changed, the application will re-render to reflect that change. State can only be manipulated within the component it is bound. In addition to storing data in state, you can also bind functions to state. So if you want to change state from a child component, you must pass a function that manipulates state and that has been bound to the state of the parent component down to that child component.

You can have multiple components with their own state in an application, but for our example it is only necessary to have one state object. Often when working with time, components will need to have their own state.

![alt text][state]

[state]: ./photos/Appjs_top.png "AppjsTop-State"

### The DOM

DOM stands for the Document Object Model. If you type ctrl+shift+c while in the browser, you will pull up Dev Tools. In the Elements tab, you can view the DOM tree built that represents the current webpage you are on. Dev Tools is extremely useful, the Console option can be used to debug JavaScript and other web-based programs. You can also download a special Dev Tool extension for Chrome mentioned in the installation guide above that is really helpful for debugging React applications.

### Keys in React

Keys in React are used to differntiate between different child components. When these child components are changed the DOM is able to compare each component using its unique key and decide if it needs to be rerendered making React as efficient as possible.

### HTML

HTML is a markup language. It is composed of tags and each tag has attributes that can be used for styling and adding additional functionality to tags.

### CSS

Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.

* ID
More specific, each ID name can only map to one HTML tag. 

* ClassName
Many tags can share the same ClassName attribute, this is used when the same styling must be applied to many tags.

## Installation Instructions

### Node.js & NPM

Download Here: <https://nodejs.org/en/.>

```sh
npm install -d
node app
```

### Create-React-App

Download Here: <https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html>

Install the global package:

```sh
npm install -g create-react-app
```

Now create a new app:

```sh
create-react-app hello-world
```

### Bootstrap for React

Download Here: <https://react-bootstrap.github.io/>

```sh
create-react-app hello-world
```

Add Boostrap's CSS package to your project by adding the following line to your project's **index.html** file in the **public** folder:

```sh
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

Without this stylesheet, Boostrap will not be able to render its own styling when you use its components.

There are other options for CSS-based design templates, another popular option is Material UI.

### React Developer Tools

For those of you who develop using Chrome, there is a useful DevTools add-on called React Developer Tools available as a Chrome extension on the Chrome web store. This extension allows you to view state and components in DevTools, which is very helpful when debugging React Applications.

## Structure

You can think of components in React as classes in object-oriented programming; they are reusable pieces that stand on their own and provide logical structure to projects. React applications consist of many components, but these components don't handle data in the same way that classes do. Components are meant to act almost as functional parts that flow together. Of course, not all applications can be made perfectly functional, but it's best to stick to this ideal as much as possible when developing with React. This concept manifests itself as unidirectional data flow in React. This means that components are often nested with child components being rendered from parents, and parents from grandparents, etc. This means the most data is passed from the highest-order component and slowly narrows and becomes more specialized as it is passed to the deepest child component. This creates a functional-esque data relationship.

### Index

Let's explore the component structure and the data flow of our example, TimeTable. The file index.js acts as the root of the application, and renders the App.js component.

![alt text][index]

[index]: ./photos/indexjs.png "index code"

### App

From App.js we render the heading, drop down selection boxes from term and department, and a child component. We also store some data in state. We load an object called courses which holds all of our data about classes available.

![alt text][courses]

[courses]: ./photos/coursesjs.png "courses json code"

We will gradually parse and use this data in child components. The user's desired department, term, and all of the course data is passed to View.js, a child component as a prop. Prop is short for properties and are like arguments passed from one component to another.

### View

In this component, we filter our course data based on the department and term selected by the user. After we have identified and stored the data matching the query, we pass this data on to the Course.js child component.

### Course

The Course.js component displays a collapsible panel for each individual course and passes on that course's sections to the Section.js child component.

### Section

We finally create a table and display all of the sections available for that course.

As you can see, data trickled all the way down from App.js to the deepest child component.

#### License

----

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
