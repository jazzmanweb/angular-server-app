export const apiFashionsList = () => 'fashions';
export const apiFashionItem = (id: string) => `${apiFashionsList()}/${id}`;
export const apiFashionToggleItems = (id: string) => `${apiFashionItem(id)}/toggle`;

export const oldApiFashionsList = (id?: string) => apiFashionsList() + (id ? '/' + id : '');
