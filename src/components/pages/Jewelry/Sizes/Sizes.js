import { useState, useEffect } from "react";

import { SIZE_FORM_KEY } from "../../../../constants/sizeFormKey";

import { Button } from "../../../reusable/Button/Button";

import { useService } from "../../../../hooks/useService";

import { bagServiceFactory } from "../../../../services/bagService";

import { SIZE_ERROR_MESSAGE } from "../../../../constants/sizeErrorMessage";

import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./Sizes.module.css";

export const Sizes = ({ jewelriesByCategory, toggleDisplayPopup }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const inventories = jewelriesByCategory[0].inventories;

  const [selectedSize, setSelectedSize] = useState(null);

  const {add} = useBagContext()

  const bagService = useService(bagServiceFactory);

  useEffect(() => {
    setSelectedSize(null);
    setErrorMessage(null);
  }, [jewelriesByCategory[0].color]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setErrorMessage(SIZE_ERROR_MESSAGE);
      return;
    }

    try {
      const size = { [SIZE_FORM_KEY.Size]: selectedSize };
      const jewelryId = jewelriesByCategory[0]._id;

      await add(size, jewelryId);
      // await bagService.create(
      //   { [SIZE_FORM_KEY.Size]: selectedSize },
      //   jewelriesByCategory[0]._id
      // );

      toggleDisplayPopup();

      setSelectedSize(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  const changeHandler = (e) => {
    setSelectedSize(e.target.value);

    setErrorMessage("");
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      <div className={styles["size-wrapper"]}>
        <div className={styles["radio-container"]}>
          {inventories.map((item) => (
            <div key={item.size} className={styles["wrapper"]}>
              <span>{`$${item.price}`}</span>
              <input
                type="radio"
                name={SIZE_FORM_KEY.Size}
                id={item.size}
                value={item.size}
                onChange={changeHandler}
                onClick={changeHandler}
                checked={item.size === selectedSize}
                disabled={item.quantity === 0}
              />
              <label className={styles["label"]} htmlFor={item.size}>
                {item.size}
              </label>
              <div className={styles["quantity"]}></div>
            </div>
          ))}
        </div>
        <div className={styles["error-message"]}>{errorMessage}</div>
      </div>
      <Button variant={"pink"} title={"Add To Bag"} />
    </form>
  );
};
