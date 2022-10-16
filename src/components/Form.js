import React from 'react';
import '../styles/components/Form.scss';

function Form() {
  return (
    <section className="form">
      <form
        className="form__container"
        action=""
        method="POST"
        name="signupForm"
      >
        <input
          className="form__input"
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
        <input
          className="form__input"
          type="text"
          name=""
          id=""
          placeholder="Last Name"
        />
        <input
          className="form__input"
          type="email"
          name=""
          id=""
          placeholder="Email Address"
        />
        <input
          className="form__input"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button className="form__submitBtn" type="submit">
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
