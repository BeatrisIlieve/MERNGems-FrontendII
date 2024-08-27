import { Link } from "react-router-dom";

import { ShoppingProcessContainer } from "../../reusable/ShoppingProcessContainer/ShoppingProcessContainer";
import { ChildWrapper } from "../../reusable/ChildWrapper/ChildWrapper";
import { BagList } from "../../common/BagList/BagList";
import { OrderSummary } from "../../common/OrderSummary/OrderSummary";
import { Button } from "../../reusable/Button/Button";
import { Collection } from "../../common/Collection/Collection";
import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { BagHeader } from "../../common/BagHeader/BagHeader";

import { useBagContext } from "../../../contexts/BagContext";

import { useIsMobile } from "../../../hooks/useIsMobile";

import styles from "./Bag.module.css";

export const Bag = () => {
  const { bagTotalQuantity } = useBagContext();

  const { isReversed } = useIsMobile();

  return (
    <>
      {bagTotalQuantity < 1 ? (
        <section className={styles["bag"]}>
          <InfoMessage
            title={"Your Shopping Bag Is Empty"}
            subtitle={"Explore and add something you love."}
          />
          <Collection />
        </section>
      ) : (
        <>
          {isReversed ? (
            <ShoppingProcessContainer>
              <ChildWrapper>
                <>
                  <OrderSummary />
                  <Link to={"/checkout"} className={styles["no-decoration"]}>
                    <Button
                      title={"Continue Checkout"}
                      buttonIsDisabled={false}
                      variant={"pink"}
                    />
                  </Link>
                </>
              </ChildWrapper>

            </ShoppingProcessContainer>
          ) : (
            <ShoppingProcessContainer>
              <ChildWrapper>
                <>
                  <BagHeader />
                  <BagList />
                </>
              </ChildWrapper>
              <ChildWrapper>
                <>
                  <OrderSummary />
                  <Link to={"/checkout"} className={styles["no-decoration"]}>
                    <Button
                      title={"Continue Checkout"}
                      buttonIsDisabled={false}
                      variant={"pink"}
                    />
                  </Link>
                </>
              </ChildWrapper>
            </ShoppingProcessContainer>
          )}
        </>
      )}
    </>
  );
};
