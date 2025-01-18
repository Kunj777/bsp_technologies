import React from "react";

import styles from "./loader.module.scss";

interface Props {
  isLoading: boolean;
}

const Loader: React.FC<Props> = (props) => {
  const { isLoading } = props;

  return isLoading ? (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  ) : (
    <div></div>
  );
};

export default Loader;
