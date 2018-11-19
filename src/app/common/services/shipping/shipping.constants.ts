
export const apiShippingList = () => 'shipping';
export const apiShippingItem = (id: string) => `${apiShippingList()}/${id}`;
export const apiShippingToggleItems = (id: string) => `${apiShippingItem(id)}/toggle`;
