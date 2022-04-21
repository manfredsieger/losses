import React, { useEffect } from 'react';
import PropsType from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './ModalMessage.scss';
import { setModalWindowText } from '../../redux/modalWindow';

export default function Message({ displayTime, showCloseBtn }) {
  const { modalWindowText } = useSelector((state) => state.modalWindowText);
  const dispatch = useDispatch();

  let timerId;

  useEffect(() => {
    timerId = setTimeout(() => {
      dispatch(setModalWindowText(null));
    }, displayTime);

    return () => clearTimeout(timerId);
  }, []);

  function closeModal() {
    clearTimeout(timerId);
    dispatch(setModalWindowText(null));
  }

  useEffect(() => () => clearTimeout(timerId));

  return (
    <section className="message__container">
      {
        showCloseBtn
          ? (
            <button
              className="message__closeBtn"
              type="button"
              onClick={closeModal}
            >
              <span className="visually-hidden">Close modal window</span>
            </button>
          )
          : null
      }
      <h2 className="visually-hidden">Modal window showing messages to user</h2>
      <p className="message__text">{modalWindowText}</p>
    </section>
  );
}

Message.propTypes = {
  displayTime: PropsType.number,
  showCloseBtn: PropsType.bool,
};

Message.defaultProps = {
  displayTime: 1500,
  showCloseBtn: false,
};
