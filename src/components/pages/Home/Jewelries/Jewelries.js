import { Bracelets } from "./Bracelets/Bracelets";
import { Earrings } from "./Earrings/Earrings";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <Bracelets />
      <Earrings/>
    </section>
  );
};
