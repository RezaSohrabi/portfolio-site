import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const DATA = {
  profile : {
    author : 'Reza Sohrabi',
    profileImg : 'rezasohrabi.jpeg',
    aboutMe : 'Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines c',
    email : 'rezasohrabi1995@yahoo.com',
    location : 'Iran, Tehran',
    socialMedias : [
      {
        name : 'googleplus.jpeg',
        link : 'https://www.googleplus.com',
      },
      {
        name : 'googleplus.jpeg',
        link : 'https://www.googleplus.com',
      },
      {
        name : 'googleplus.jpeg',
        link : 'https://www.googleplus.com',
      },
      {
        name : 'googleplus.jpeg',
        link : 'https://www.googleplus.com',
      }
    ]
  },
  lifeStories : [
    {
      title : 'Graduate of software engineering',
      time : 'Present',
      image : 'shamsipour.jpeg',
      from : 'technical and vocational college of Tehran shamsipour',
      fromLink : 'https://shamsipour.tvu.ac.ir',
      description : 'Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines c'
    },
    {
      title : 'Graduate of software engineering',
      time : 'Present',
      image : 'shamsipour.jpeg',
      from : 'technical and vocational college of Tehran shamsipour',
      fromLink : 'https://shamsipour.tvu.ac.ir',
      description : 'Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines c'
    }, 
    {
      title : 'Graduate of software engineering',
      time : 'Present',
      image : 'shamsipour.jpeg',
      from : 'technical and vocational college of Tehran shamsipour',
      fromLink : 'https://shamsipour.tvu.ac.ir',
      description : 'Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines c'
    }, 
    {
      title : 'Graduate of software engineering',
      time : 'Present',
      image : 'shamsipour.jpeg',
      from : 'technical and vocational college of Tehran shamsipour',
      fromLink : 'https://shamsipour.tvu.ac.ir',
      description : 'Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines c'
    },    
  ],
  abilities : [
    {
      field : 'Front End',
      skills : [
        {
          name : 'javascript',
          icon : 'javascript.js'
        },
        {
          name : 'javascript',
          icon : 'javascript.js'
        },
        {
          name : 'javascript',
          icon : 'javascript.js'
        },
        {
          name : 'javascript',
          icon : 'javascript.js'
        },
        {
          name : 'javascript',
          icon : 'javascript.js'
        } 
      ]
    },
    {
      field : 'Front End',
      skills : [
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'
        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        } 
      ]
    },
    {
      field : 'Front End',
      skills : [
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        } 
      ]
    },
    {
      field : 'Front End',
      skills : [
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        },
        {
          name : 'javascript',
          icon : 'javascript.js',
          site : 'https://www.javascript.com'

        } 
      ]
    }
  ]


}

ReactDOM.render(
  <React.StrictMode>
    <App data={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
