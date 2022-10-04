import React from 'react';
import ReactDOM from 'react-dom';
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Provider from './Provider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const httpLink = new HttpLink({ uri: 'http://localhost:3004/graphql' });
//
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4001/subscriptions`,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       //authToken: localStorage.getItem(AUTH_TOKEN),
//     }
//   }
// })
//
// const link = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query)
//     return kind === 'OperationDefinition' && operation === 'subscription'
//   },
//   httpLink
// )
//
// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// })

ReactDOM.render(<Provider />, document.getElementById('root'));
registerServiceWorker();
