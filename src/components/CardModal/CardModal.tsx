import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./CardModal.module.less";

interface CardModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ src, onClose, isOpen, alt }) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const modalRoot = document.getElementById("modal-root");
  return (
    isOpen &&
    backdropRoot &&
    modalRoot && (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, backdropRoot)}
        {ReactDOM.createPortal(
          <div className={classes.modal}>
            <button onClick={onClose} className={classes.modal__btn}>
              ❌
            </button>
            <img src={src} alt={alt} />
          </div>,
          modalRoot
        )}
      </>
    )
  );
};

export default CardModal;
