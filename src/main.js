import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

require('./lib/md5');
import routes from './app/app-routing';

// Render the main component into the dom
ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('app'));
