import React, { Fragment } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import '../assets/styles/App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <CardList />
    </Fragment>
  );
}

export default App;
