import { useState } from "react";

import { CircleIcon } from "../CircleIcon/CircleIcon";

import styles from "./Image.module.css";

import { useJewelryItemContext } from "../../../contexts/JewelryItemContext";

export const Image = () => {
  const { jewelry, isSoldOut } = useJewelryItemContext();

  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);

  const toggleSelected = () => {
    setLeftIsSelected(!leftIsSelected);
    setRightIsSelected(!rightIsSelected);
  };

  return (
    <div className={styles["jewelry-images"]}>
      <div className={styles["thumbnail"]}>
        <img
          src={leftIsSelected ? jewelry.firstImageUrl : jewelry.secondImageUrl}
          alt={jewelry.title}
          onClick={jewelry.secondImageUrl ? toggleSelected : null}
          className={
            leftIsSelected
              ? jewelry.secondImageUrl
                ? styles["left-image"]
                : styles["no-second-image-available"]
              : styles["right-image"]
          }
        />
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </div>
      {jewelry.secondImageUrl && (
        <div className={styles["circles-container"]}>
          <CircleIcon isSelected={leftIsSelected} />
          <CircleIcon isSelected={rightIsSelected} />
        </div>
      )}
    </div>
  );
};
