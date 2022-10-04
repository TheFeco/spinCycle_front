import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import RoutesApp from './routes';
import Client from './api/connection'
import { ApolloProvider } from 'react-apollo'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <Provider store={createStore(Reducers)}>
          <RoutesApp />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
