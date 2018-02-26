import React, { Component } from 'react';
import './App.css';
var Winterfell = require('winterfell');
var schema = require('./schema');
var loginSchema = require('./loginSchema');

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};

var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};

var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

class App extends Component {
  render() {
    return (
      <div >
      <Winterfell schema={schema} onRender={onRender}  onSwitchPanel={onSwitchPanel}
             onSubmit={onSubmit} onUpdate={onUpdate}/>


                <Winterfell schema={loginSchema}
                            disableSubmit={true}
                            onRender={onRender}
                            onUpdate={onUpdate}
                            onSwitchPanel={onSwitchPanel}
                            onSubmit={onSubmit} />
      </div>
    );
  }
}

export default App;
