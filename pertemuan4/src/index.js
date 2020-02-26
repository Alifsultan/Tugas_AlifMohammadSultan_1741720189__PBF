import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StateFull from './StateFull';

// function HelloWorld (){
//     return<p> ini adalah function component</p>
// }
// ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
ReactDOM.render(<StateFull />, document.getElementById('root'));
serviceWorker.unregister();