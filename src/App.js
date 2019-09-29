import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import './styles/Home.css';
import Layout from './components/partials/layout/Layout';
import Information from './components/partials/users/Information';
import Entreprise from './components/partials/users/Entreprise';
import Image from './components/partials/users/Image';
import Design from './components/partials/users/Design';

function App() {
  return (
    <div className="App">
       <div className="homepage">
          <Switch>
            <Route path="/" exact render={(props) => <Layout {...props}><Information /></Layout>} />
            <Route path="/entreprise" exact render={(props) => <Layout {...props}><Entreprise /></Layout>} />
            <Route path="/image" exact render={(props) => <Layout {...props}><Image /></Layout>} />
            <Route path="/design" exact render={(props) => <Layout {...props}><Design /></Layout>} />
          </Switch>
      </div>
    </div>
          
  );
}

export default App;
