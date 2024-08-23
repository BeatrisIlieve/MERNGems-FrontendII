import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CircleIcons } from "./CircleIcons/CircleIcons";
import { LargeImage } from "./LargeImage/LargeImage";

import { slugify } from "../../../utils/slugify";

import styles from "./LargeImages.module.css";

export const LargeImages = ({
  jewelriesByCategory,
  circleIconsPosition,
  variant,
}) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  const location = useLocation();

  const locationIsCollectionPage = location.pathname === "/collection";

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  const navigate = useNavigate();

  const clickHandler = () => {
    if (locationIsCollectionPage) {
      const categoryTitle = jewelriesByCategory[0].categories[0].title;

      const colorTitle = jewelriesByCategory[0].colors[0].title;

      const slugifiedCategoryTitle = slugify(categoryTitle);

      const slugifiedColorTitle = slugify(colorTitle);

      navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
    } else {
      toggleFirstImageUrlIsActive();
    }
  };

  return (
    <div className={styles["images"]}>
      <CircleIcons
        firstImageUrlIsActive={firstImageUrlIsActive}
        toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        firstImageUrl={jewelriesByCategory[0].firstImageUrl}
        secondImageUrl={jewelriesByCategory[0].secondImageUrl}
        position={circleIconsPosition}
      />
      <div onClick={clickHandler}>
        <LargeImage
          firstImageUrlIsActive={firstImageUrlIsActive}
          jewelriesByCategory={jewelriesByCategory}
          variant={variant}
        />
      </div>
    </div>
  );
};
