import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import SchemaApp from './SchemaApp';


import ListWidget from './widgets/ListWidget';
import MQTTContainer from './containers/MQTTContainer';
//import { Connector, subscribe } from 'mqtt-react';
import Connector from './temp_connector';
import subscribe, {parse} from './temp_subscribe';
//const ListWidgetStatic = subscribe({topic: '@demo/messages'})(ListWidget);


// Redux State
import { Provider } from 'react-redux';
import store from './store';
import ReduxContainer from './containers/ReduxContainer';


const mqttDispatch = (topic, message, packet) => {
  const action = {
    type: 'MQTT',
    topic,
    message: parse(message),
    packet
  }
  store.dispatch(action);
}
const StaticSubscriber = subscribe({topic: "message", dispatch: mqttDispatch});
const MessageSubscription = StaticSubscriber("div");

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Connector mqttProps="ws://test.mosca.io/">
      <div>
        {/* Global Subscriptions */}
        {/* <MessageSubscription />*/}
        {/* App */}
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/*
          <h3> Dynamic via Redux (Topic : "message")</h3>
          <ReduxContainer statePath={'topics.message'}>
            <ListWidget itemKey="data" itemProps={{style: {backgroundColor: '#FF0000'}}} />
          </ReduxContainer>
          */}
          <h3> Dynamic via MQTT and Direct State (Topic: "@demo/messages")</h3>
          <MQTTContainer topic="@demo/messages">
            <ListWidget itemKey="data" itemProps={{style: {backgroundColor: '#0000FF'}}} />
          </MQTTContainer>
          <h3>Static for debugging purposes</h3>
          {/*<ListWidgetStatic />*/}
          {/*<SchemaApp/>*/}
        </div>
        </div>
      </Connector>
      </Provider>
    );
  }
}

export default App;
