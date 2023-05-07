import styles from './Baeksulgi.module.css';
import { useContext } from 'react';
import { BaeksulgiContext } from '../BaeksulgiProvider';

const Baeksulgi = () => {
  const { isOpen, content, closeModal } = useContext(BaeksulgiContext);

  return (
    <dialog className={styles.modal} open={isOpen}>
      <div className={styles['modal-backdrop']} onClick={closeModal}></div>
      <div className={styles['modal-body']}>{content}</div>
    </dialog>
  );
};

export default Baeksulgi;
