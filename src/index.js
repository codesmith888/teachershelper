import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//-------------------I DON"T KNOW WHY THIS WONT WORK
// import React from 'react'
// // import ReactDOM from 'react-dom'
// import './styles/index.css'
// import * as serviceWorker from './serviceWorker';

// // // 1
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import App from './App';
// // import CreateAssignment from './componenents/CreateAssignment'
// // import HelperAndEnvironment from './components/HelperAndEnvironment'
// // import Classroom from './components/Classroom'


// // 2
// const httpLink = createHttpLink({
//   uri: 'https://localhost:3000'
// })

// // 3
// const createApolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

// const Index = () => {
//   const client = createApolloClient();
//   return (
//     <ApolloProvider client = {client}>
//       <div>
//         <App />
//       </div>
//     </ApolloProvider>
//   );
// };
// export default Index

// // ReactDOM.render(
// //   <ApolloProvider client={client}>
// //     <App />
// //   </ApolloProvider>,
// //   document.getElementById('root')
// // )
// serviceWorker.unregister();