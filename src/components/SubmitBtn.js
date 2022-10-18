import React from 'react';

function SubmitBtn(props) {
  return (
    <button
      className="form__submitBtn"
      type="submit"
      onClick={props.handleForm}
    >
      claim your free trial
    </button>
  );
}

export default SubmitBtn;
