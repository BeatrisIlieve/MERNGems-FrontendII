import { CategoryCard } from "./CategoryCard/CategoryCard";

import { CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID } from "./constants/categoriesByIdAndInitialColorId";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <section id={styles["collection"]}>
      <div className={styles["wrapper"]}>
        {Object.entries(CATEGORIES_BY_ID_AND_INITIAL_COLOR_ID).map(
          ([categoryTitle, colorTitle]) => (
            <CategoryCard
              key={categoryTitle}
              categoryTitle={categoryTitle}
              colorTitle={colorTitle}
            />
          )
        )}
      </div>
    </section>
  );
};
