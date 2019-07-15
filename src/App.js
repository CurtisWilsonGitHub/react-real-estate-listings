import React from 'react';
import RealEstate from './components/RealEstate';
import {Helmet} from "react-helmet";
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>House Finders</title>
      </Helmet>
      <RealEstate />
    </div>
  );
}

export default App;
