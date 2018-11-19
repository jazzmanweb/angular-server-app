export const apiCampaignsList = () => 'campaigns';
export const apiCampaignItem = (id: string) => `${apiCampaignsList()}/${id}`;
export const apiCampaignToggleItems = (id: string) => `${apiCampaignItem(id)}/toggle`;
