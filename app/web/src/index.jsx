import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green100, green500, green700} from 'material-ui/styles/colors';

import './styles/index.styl';
import App from './containers/App';

import SocketIO from 'socket.io-client'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  //userAgent: req.headers['user-agent'],
});

//console.log(App)

const app = (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App></App>
  </MuiThemeProvider>
);

const socketClient = SocketIO(location.origin);
socketClient.on('connect', () => {
  console.log('connect!');
});
socketClient.on('event', (data) => {
  console.log('on data!');
});
socketClient.on('disconnect', () => {
  console.log('disconnect!');
});

ReactDOM.render(app, document.getElementById('app'));
