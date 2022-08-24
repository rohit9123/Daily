import Modal from "./Modal.module.css";

const ErrorModal = (props) => {
  return (
    <div onClick={props.unset}>
      <div className={Modal.backdrop} />
      <div className={Modal.modal}>
        <header className={Modal.header}>
          <h2>{props.title} </h2>
        </header>
        <div className={Modal.content}>
          <p>{props.message}</p>
        </div>
        <footer className={Modal.actions}>
          <button onClick={props.unset}>okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
