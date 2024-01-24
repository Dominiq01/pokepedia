import classes from "./Backdrop.module.less";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

export default Backdrop;
