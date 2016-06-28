import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey600, blueGrey700, blueGrey800, blueGrey900} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {Route} from 'react-router';
import { Provider, connect } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

import { createHistory } from 'history';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';

//import { devTools } from 'redux-devtools';
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import './styles/index.styl';
import App from './containers/App';
import Home from './containers/Home';
import JobList from './containers/JobList';
import HostList from './containers/HostList';

import SocketIO from 'socket.io-client'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey600,
    primary2Color: blueGrey700,
    primary3Color: blueGrey800,
  },
}, {
  avatar: {
    borderColor: null,
  },
  //userAgent: req.headers['user-agent'],
});

const reducer = combineReducers({
  router: routerStateReducer,
});

const store = compose(
  reduxReactRouter({
    createHistory
  }
    //devTools()
  )
)(createStore)(reducer);


//const socketClient = SocketIO(location.origin);
//socketClient.on('connect', () => {
//  console.log('connect!');
//});
//socketClient.on('event', (data) => {
//  console.log('on data!');
//});
//socketClient.on('disconnect', () => {
//  console.log('disconnect!');
//});

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ReduxRouter>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="jobs" component={JobList} />
          <Route path="hosts" component={HostList} />
        </Route>
      </ReduxRouter>
    </MuiThemeProvider>
  </Provider>

), document.getElementById('app'));
