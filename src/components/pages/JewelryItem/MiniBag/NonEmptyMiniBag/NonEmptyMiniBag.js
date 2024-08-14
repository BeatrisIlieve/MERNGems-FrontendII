import { Link } from "react-router-dom";

import { BagList } from "../../../../reusable/BagList/BagList";
import { Button } from "../../../../reusable/Button/Button";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { Popup } from "../../../../reusable/Popup/Popup";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  const buttonClickHandler = () => {
    document.body.style.overflow = "visible";

    toggleDisplayMiniBagPopup();
  };

  return (
    <Popup
      popupCloseHandler={toggleDisplayMiniBagPopup}
      modalVariant={"mini-bag"}
      overlayVariant={"mini-bag"}
    >
      <section className={styles["mini-bag"]}>
        <LargeTitle title={"My Bag"} textAlight={"align-left"} />
        <BagList variant={"mini"} />
        <div className={styles["bottom-container"]}>
          <DualTitleSection
            firstTitle={"Total"}
            secondTitle={`$ ${totalPrice}`}
            variant={"bolded"}
          />
          <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
            <Button
              title={"View Bag"}
              buttonIsDisabled={false}
              callBackFunction={buttonClickHandler}
              variant={"pink"}
            />
          </Link>
          <Link to={"/checkout"} className={styles["no-decoration"]}>
            <Button
              title={"Continue Checkout"}
              buttonIsDisabled={false}
              callBackFunction={buttonClickHandler}
              variant={"gray"}
            />
          </Link>
        </div>
      </section>
    </Popup>
  );
};
