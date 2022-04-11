import React from 'react';
import PropsTypes from 'prop-types';
import './Message.scss';

export default function Message({ text, className }) {
  return (
    <section className={`message__container ${className}`}>
      <h2 className="visually-hidden">Modal window showing messages to user</h2>
      <p className="message__text">{text}</p>
    </section>
  );
}

Message.propTypes = {
  text: PropsTypes.string.isRequired,
  className: PropsTypes.string.isRequired,
};
