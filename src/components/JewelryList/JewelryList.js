import { Routes, Route } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useJewelryList } from "../../hooks/useJewelryList";

import { JewelryListItem } from "../JewelryListItem/JewelryListItem";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { COLLECTIONS_BY_ID } from "../../mappers/collectionsById";
import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";

import { NavLinkItem } from "../NavLinkItem/NavLinkItem";

import { transformUrlSegment } from "../../utils/transformUrlSegment";

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./JewelryList.module.css";

export const JewelryList = () => {
  const location = useLocation();

  const pathname = location.pathname.substring(1);
  const [collectionName, categoryName] = pathname.split("/");

  const collectionId = COLLECTIONS_BY_ID[collectionName];
  const categoryId = CATEGORIES_BY_ID[categoryName];

  const transformedCollectionName = transformUrlSegment(collectionName);

  const navItems = [
    {
      to: "bracelets",
      label: "Bracelets",
      icon: faFilter,
      iconVariant: "filter",
    },
    {
      to: "earrings",
      label: "Earrings",
      icon: faFilter,
      iconVariant: "filter",
    },
    {
      to: "necklaces",
      label: "Necklaces & Pendants",
      icon: faFilter,
      iconVariant: "filter",
    },
    { to: "rings", label: "Rings", icon: faFilter, iconVariant: "filter" },
  ];

  const navCollection = [
    {
      to: `/${collectionName}`,
      label: `${transformedCollectionName} Collection`,
      icon: faFilterCircleXmark,
      iconVariant: "filter",
    },
  ];

  const {
    loading,
    jewelries,
    totalCount,
    loadMore,
    handleLoadMore,
    showLoadMore,
  } = useJewelryList(collectionId, categoryId);

  return (
    <section className={styles["jewelries"]}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles["nav-filter"]}>
          <NavLinkItem items={navItems} />
        </div>
        <NavLinkItem items={navCollection} />
      </div>
      <Routes>
        <Route path="/bracelets" />
        <Route path="/earrings" />
        <Route path="/necklaces" />
        <Route path="/rings" />
        <Route path={`/${collectionName}`} />
      </Routes>
      <div className={styles["jewelries-count"]}>
        Showing 1 -{" "}
        {totalCount >= jewelries.length ? jewelries.length : totalCount} of{" "}
        {totalCount}
      </div>
      {loading ? (
        <>
          <LoadingSpinner />
          <CardSkeleton />
        </>
      ) : (
        <div className={styles["jewelry-grid"]}>
          {jewelries.map((j) => (
            <JewelryListItem key={j._id} {...j} />
          ))}
        </div>
      )}
      {loadMore && showLoadMore && (
        <div className={styles["button"]} onClick={handleLoadMore}>
          <AnimatedButton title={"Load More"} />
        </div>
      )}
    </section>
  );
};
