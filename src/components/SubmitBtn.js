import React from 'react';
import '../styles/components/SubmitBtn.scss';

function SubmitBtn(props) {
  return (
    <button className="submitBtn" type="submit" onClick={props.handleForm}>
      claim your free trial
    </button>
  );
}

export default SubmitBtn;
