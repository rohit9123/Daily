import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
// console.log(portalElement);
const Modal = (props) => {
  console.log(props.children);
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
