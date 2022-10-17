import React from 'react';
import { useState } from 'react';
import Info from '../components/Info';
import PurpleContainer from '../components/PurpleContainer';
import Form from '../components/Form';
import '../styles/components/App.scss';

function App() {
  const [dataUser, setDataUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  //VALIDACIÓN FORMULARIO
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
  };

  // GUARDAR VALOR INPUT

  const handleInput = (ev) => {
    setDataUser(ev.target.value);
  };

  //FUNCION QUE LLAMA A VALOR INPUT Y A VALIDACION

  const handleForm = (ev) => {
    handleInput(ev);
    setErrors(validateForm(dataUser));
  };

  //VALIDACIONES

  const validateForm = (dataUser) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (dataUser.name === '') {
      errors.name = 'Can´t be blank';
    } else if (!regexName.test(dataUser.name)) return errors;
  };

  return (
    <>
      <div className="body">
        <Info />
        <div className="container">
          <PurpleContainer />
          <Form
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            dataUser={dataUser}
            errors={errors}
            handleForm={handleForm}
          />
        </div>
      </div>
    </>
  );
}

export default App;
