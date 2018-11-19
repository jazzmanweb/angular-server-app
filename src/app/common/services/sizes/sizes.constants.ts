export const apiSizesList = () => 'sizes';
export const apiSizeItem = (id: string) => `${apiSizesList()}/${id}`;
export const apiSizeToggleItems = (id: string) => `${apiSizeItem(id)}/toggle`;
