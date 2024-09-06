import { useState } from "react";

import { XMark } from "../XMark/XMark";

import styles from "./Popup.module.css";

export const Popup = ({
  popupCloseHandler,
  children,
  modalVariant,
  overlayVariant,
}) => {
  const showXMark = modalVariant !== "authentication";

  const [isTransitioning, setIsTransitioning] = useState(false);

  const closeHandler = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      popupCloseHandler();
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      className={`${styles["overlay"]}  ${styles[overlayVariant]} ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]} ${styles[modalVariant]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {showXMark && <XMark callbackFunction={closeHandler} />}
        <div className={styles["content"]}>{children}</div>
      </div>
    </section>
  );
};
