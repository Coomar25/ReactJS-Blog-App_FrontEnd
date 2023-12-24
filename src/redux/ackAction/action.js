export const setInnerData = (tagsOrCategories, slug, postAllData) => ({
  type: "SET_INNER_DATA",
  payload: { tagsOrCategories, slug, postAllData },
});
