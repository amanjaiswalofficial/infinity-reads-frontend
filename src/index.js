// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import * as serviceWorker from './serviceWorker';

// Custom imports
import App from './App';
import './index.css';
import {AppContextProvider} from 'context/appContext'


// Initialize Apollo Client
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache()
  });


ReactDOM.render(
    <AppContextProvider>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </AppContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
