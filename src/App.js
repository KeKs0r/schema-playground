import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './assets/nf_logo.svg';
import './App.css';
import SchemaApp from './SchemaApp';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Connector } from 'mqtt-react';
import RaisedButton from 'material-ui/RaisedButton';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Connector mqttProps="ws://test.mosca.io/">
          <Card>
            <CardMedia
            className="App-header"
              overlay={<CardTitle title="Generated App" subtitle="from schema.js" />}
            >
              <img src={logo} className="App-logo"/>
            </CardMedia>
            <SchemaApp />
          </Card>
        </Connector>
      </MuiThemeProvider>
    );
  }
}

export default App;
