import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";

import { useWishlistContext } from "../../../contexts/WishlistContext";

import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const { wishlistItems, wishlistTotalQuantity } = useWishlistContext();

  const itemsArray = wishlistItems?.result;

  const displayContent = Array.isArray(itemsArray);

  const subtitle =
    wishlistTotalQuantity > 0
      ? "Your favorite item(s) are below. Wishes can come true, especially when you dream."
      : "This list is empty. Explore and add something you love.";

  return (
    <>
      {displayContent && (
        <section id={styles["wishlist"]}>
          <InfoMessage
            title={`Your Wish List (${wishlistTotalQuantity})`}
            subtitle={subtitle}
          />
        </section>
      )}
    </>
  );
};
