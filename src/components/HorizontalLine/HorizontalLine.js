import styles from "./HorizontalLine.module.css";

export const HorizontalLine = ({ variant, position }) => {
  return (
    <div
      className={
        position
          ? styles["flex-container-line-absolute"]
          : styles["flex-container-line"]
      }
    >
      <hr className={styles[`hr-line-${variant}`]} />
      <img
        className={styles["line-img"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1707499296/template_images/giphy_s_b3cfly_1_b0dwbo.gif"
        alt=""
      />
      <hr className={styles[`hr-line-${variant}`]} />
    </div>
  );
};
