import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faGem } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "../Icon/Icon";

import { SpanTitle } from "../SpanTitle/SpanTitle";

import styles from "./Header.module.css";

export const Header = () => {
  const { bagTotalQuantityIntoState } = useBagContext();

  return (
    <header className={styles["header"]}>
      <div className={styles["wrapper"]}>
        <nav>
          <ul className={styles["icon-list"]} role="list">
            <li className={styles["icon-bar-item"]}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? styles["selected"]
                    : `${styles["icon-item"]} ${styles["icon-bar-item"]}`
                }
                to={"/"}
              >
                <Icon icon={faGem} variant={"header"} />
                <SpanTitle title={"Collections"} />
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          className={styles["logo-image"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1719057213/template_images/Screenshot_2024-06-22_at_14.52.43_xrdvgt.png"
          }
          alt="logo-image"
        />
        <nav>
          <ul className={styles["icon-list"]} role="list">
            <li>
              <Link
                className={`${styles["icon-bar-item"]} ${styles["icon-bar-item-bag"]}`}
                to={"/users/shopping-bag"}
              >
                <Icon icon={faBagShopping} variant={"header"} />
                <SpanTitle title={"My Bag"} />
                {bagTotalQuantityIntoState > 0 && (
                  <span
                    className={`${styles["count-span"]} ${styles["pulse"]}`}
                  >
                    {bagTotalQuantityIntoState}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link className={styles["icon-bar-item"]} to="/users/account">
                <Icon icon={faUser} variant={"header"} />
                <SpanTitle title={"Account"} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <HorizontalLine variant={"large"} position={"absolute"} />
    </header>
  );
};
