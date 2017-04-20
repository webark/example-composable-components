import Ember from 'ember';

const {
  Controller,
} = Ember;

export default Controller.extend({
  frameworks: [{
    name: 'Ember',
    description: 'A framework for creating ambitious web applications.',
    link: {
      url: 'https://emberjs.com',
      text: 'ember.js',
    },
    subFrameworks: [{
      name: 'Glimmer',
      description: 'Fast and light-weight UI components for the web.',
      link: {
        url : 'https://glimmerjs.com/',
        text: 'glimmer.js',
      },
    }]
  }, {
    name: 'React',
    description: 'Declarative. React makes it painless to create interactive UIs.',
    link: {
      url: 'https://facebook.github.io/react/',
      text: 'react.js',
    },
  }, {
    name: 'Other',
    description: 'AngularJS is what HTML would have been, had it been designed for building web-apps.',
    link: {
      url: 'https://angularjs.org',
      text: 'angular.js',
    },
  }]
})
