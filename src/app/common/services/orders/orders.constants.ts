export const apiOrdersList = () => 'orders';
export const apiOrderItem = (id: string) => `${apiOrdersList()}/${id}`;
export const apiOrderToggleItems = (id: string) => `${apiOrderItem(id)}/toggle`;
export const oldApiOrdersList = (id?: string) => apiOrdersList() + (id ? '/' + id : '');
