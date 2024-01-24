import React from "react";
import classes from "./Loader.module.less";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
