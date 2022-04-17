import React from 'react';
import { useSelector } from 'react-redux';
import './ModalMessage.scss';

export default function Message() {
  const { modalWindowText } = useSelector((state) => state.modalWindowText);

  return (
    <section className={`message__container ${modalWindowText ? 'message__container--visible' : ''}`}>
      <h2 className="visually-hidden">Modal window showing messages to user</h2>
      <p className="message__text">{modalWindowText}</p>
    </section>
  );
}
