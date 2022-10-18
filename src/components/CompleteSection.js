import React from 'react';
import '../styles/components/CompleteSection.scss';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

function CompleteSection() {
  return (
    <section className="complete">
      <h2 className="complete__title">It's time to start learning!</h2>
      <h3 className="complete__subtitle">Check your email</h3>
      <MdOutlineMarkEmailRead className="complete__email" />
    </section>
  );
}

export default CompleteSection;
