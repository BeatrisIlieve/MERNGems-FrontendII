import { JewelryCard } from "../../JewelryCard/JewelryCard";

import { slugify } from "../../../utils/slugify";

export const JewelryListItem = ({
  _id,
  firstImageUrl,
  jewelryTitle,
  categoryTitle,
}) => {
  const slugifiedCategoryTitle = slugify(categoryTitle);
  const slugifiedJewelryTitle = slugify(jewelryTitle);

  return (
    <JewelryCard
      jewelryId={_id}
      firstImageUrl={firstImageUrl}
      slugifiedCategoryTitle={slugifiedCategoryTitle}
      slugifiedJewelryTitle={slugifiedJewelryTitle}
    />
  );
};
