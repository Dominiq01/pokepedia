import React, {useState} from "react";
import classes from './ErrorMessage.module.less';

interface ErrorMessageProps {
  children?: React.ReactNode;

}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    !isClosed && <div className={classes.error}>
      <button onClick={() => setIsClosed(true)} className={classes.error__button}>❌</button>
      <h2>⛔An error occured!⛔</h2>
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;
