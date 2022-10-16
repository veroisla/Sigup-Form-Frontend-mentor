import React from 'react';
import Info from '../components/Info';
import Form from '../components/Form';
import '../styles/components/App.scss';

function App() {
  return (
    <>
      <div className="body">
        <Info />
        <Form />
      </div>
    </>
  );
}

export default App;
