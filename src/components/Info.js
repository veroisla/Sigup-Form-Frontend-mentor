import '../styles/components/Info.scss';

import React from 'react';

function info() {
  return (
    <section className="info">
      <h1 className="info__title">Learn to code by watching others</h1>
      <p className="info__text">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <div className="info__purpleContainer">
        <p className="info__free">
          <span className="info__freeSpan">Try it free 7 days </span>then
          $20/mo. thereafter
        </p>
      </div>
    </section>
  );
}

export default info;
