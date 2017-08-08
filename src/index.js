import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
    networkInterface
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);
registerServiceWorker();
