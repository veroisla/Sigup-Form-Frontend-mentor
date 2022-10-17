import React from 'react';
import '../styles/components/Form.scss';

function Form(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChange = ev.target.name;
    props.handleInput(inputValue, inputChange);
  };
  return (
    <section className="form">
      <form
        className="form__container"
        action=""
        method="POST"
        name="signupForm"
        onSubmit={props.handleSubmit}
      >
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="First Name"
          onChange={handleInput}
          value={props.dataUser.name}
        />
        {props.errors.name && (
          <p className="form__error">{props.errors.name}</p>
        )}
        <input
          className="form__input"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          className="form__input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button
          className="form__submitBtn"
          type="submit"
          onClick={props.handleForm}
        >
          claim your free trial
        </button>
        <p className="form__termsContainer">
          <small className="form__terms">
            By clicking the button, you are agreeing to our{' '}
            <span className="form__pinkSpan">Terms and Services</span>
          </small>
        </p>
      </form>
    </section>
  );
}

export default Form;
