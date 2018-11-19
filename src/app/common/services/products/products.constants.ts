export const apiProductsList = () => 'products';
export const apiProductItem = (id: string) => `${apiProductsList()}/${id}`;
export const apiProductToggleItems = (id: string) => `${apiProductItem(id)}/toggle`;
export const oldApiProductsList = (id?: string) => apiProductsList() + (id ? '/' + id : '');
