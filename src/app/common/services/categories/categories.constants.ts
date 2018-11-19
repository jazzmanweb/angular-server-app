export const apiCategoriesList = () => 'categories';
export const apiCategoryItem = (id: string) => `${apiCategoriesList()}/${id}`;
export const apiCategoryToggleItems = (id: string) => `${apiCategoryItem(id)}/toggle`;
