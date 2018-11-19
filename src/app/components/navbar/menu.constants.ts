import { MenuItemModel } from 'src/app/common/model/models/menu.model';
import { ViewTypesEnum } from 'src/app/common/model/enums/view-types.enum';

const submenuList = [
	ViewTypesEnum.LIST,
	ViewTypesEnum.OLD_LIST,
	ViewTypesEnum.DETAILS,
	ViewTypesEnum.CREATE,
	ViewTypesEnum.EDIT
];

const submenu = submenuList.map((item) => new MenuItemModel({
	label: item,
	url: item,
}))

export const MENU_LIST: MenuItemModel[] = [
	new MenuItemModel({
		label: 'CATEGORIES',
		url: 'categories',
		icon: 'category',
		submenu
	}),
	new MenuItemModel({
		label: 'SIZES',
		url: 'sizes',
		icon: 'signal_cellular_alt',
		submenu
	}),
	new MenuItemModel({
		label: 'PRODUCTS',
		url: 'products',
		icon: 'format_align_justify',
		submenu
	}),
	new MenuItemModel({
		label: 'FASHIONS',
		url: 'fashions',
		icon: 'format_indent_increase',
		submenu
	}),
	new MenuItemModel({
		label: 'ORDERS',
		url: 'orders',
		icon: 'shopping_cart',
		submenu
	}),
	new MenuItemModel({
		label: 'SHIPPING',
		url: 'shipping',
		icon: 'local_shipping',
		submenu
	}),
	new MenuItemModel({
		label: 'CAMPAIGNS',
		url: 'campaigns',
		icon: 'alarm',
		submenu
	})
];

