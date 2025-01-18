import React from "react";

import { Time } from "@/Icons";

import styles from "./nilScreen.module.scss";

interface Props {
  icon?: string;
  title?: string;
  description?: string;
  btnText?: string;
  btn?: string;
  onClick?: () => void;
  updateNilScreen?: string;
  isBtnHidden?: boolean;
  iconClassName?: string;
}

const NillScreen: React.FC<Props> = (props) => {
  const { title, description } = props;

  return (
    <div className={styles.nilScreenWrapper}>
      <div className={styles.nilScreen}>
        <div className={styles.icon}>
          <Time />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default NillScreen;
