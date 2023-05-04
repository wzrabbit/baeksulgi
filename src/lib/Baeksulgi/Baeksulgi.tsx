import styles from './Baeksulgi.module.css';

const Baeksulgi = () => {
  const isOpen = true;
  const closeModal = () => {};
  const content = <div>Hello, World!</div>;

  return (
    <dialog className={styles.modal} open={isOpen}>
      <div className={styles['modal-backdrop']} onClick={closeModal}></div>
      <div className={styles['modal-body']}>{content}</div>
    </dialog>
  );
};

export default Baeksulgi;
