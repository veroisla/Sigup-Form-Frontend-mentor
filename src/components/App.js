import React from 'react';
import { useState } from 'react';
import Info from '../components/Info';
import PurpleContainer from '../components/PurpleContainer';
import Form from '../components/Form';
import CompleteSection from '../components/CompleteSection';
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

  const [completeForm, setCompleteForm] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
  };

  // GUARDAR VALOR INPUT

  const handleInput = (inputValue, inputChanged) => {
    const newData = {
      ...dataUser,
      [inputChanged]: inputValue,
    };
    setDataUser(newData);
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
    //email debe incluir @ y un .
    let regexEmail = /\S+@\S+\.\S+/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

    if (dataUser.name === '') {
      errors.name = 'First Name cannot be empty';
    } else if (!regexName.test(dataUser.name)) {
      errors.name = 'invalid format';
    } else if (errors.name !== '') {
      completeForm.name = true;
    }

    if (dataUser.lastName === '') {
      errors.lastName = 'Last Name  cannot be empty';
    } else if (!regexName.test(dataUser.lastName)) {
      errors.lastName = 'Invalid format';
    } else if (errors.lastName !== '') {
      completeForm.lastName = true;
    }

    if (dataUser.email === '') {
      errors.email = 'Looks like this is not an email';
    } else if (!regexEmail.test(dataUser.email)) {
      errors.email = 'Invalid format';
    } else if (errors.email !== '') {
      completeForm.email = true;
    }

    if (dataUser.password === '') {
      errors.password = 'Password cannot be empty';
    } else if (!regexPassword.test(dataUser.password)) {
      errors.password =
        'Must have a number, uppercase and lowercase letter and minimum of 8 letters';
    } else if (errors.password !== '') {
      completeForm.password = true;
    }
    return errors;
  };

  return (
    <>
      <div className="body">
        {completeForm.name === true &&
        completeForm.lastName === true &&
        completeForm.email === true &&
        completeForm.password === true ? (
          <CompleteSection />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default App;
