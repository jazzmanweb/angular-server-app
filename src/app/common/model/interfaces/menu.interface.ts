export interface MenuItemInterface {
	label?: string;
	url?: string;
	icon?: string;
	styleClass?: string;
	submenu?: MenuItemInterface[];
}
