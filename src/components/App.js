import React from 'react';
import Info from '../components/Info';
import PurpleContainer from '../components/PurpleContainer';
import Form from '../components/Form';
import '../styles/components/App.scss';

function App() {
  return (
    <>
      <div className="body">
        <Info />
        <div className="container">
          <PurpleContainer />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
