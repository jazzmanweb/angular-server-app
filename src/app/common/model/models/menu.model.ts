import { MenuItemInterface } from '../interfaces/menu.interface';

export class MenuItemModel implements MenuItemInterface {
	public label: string;
	public url: string;
	public icon: string;
	public styleClass: string;
	public submenu: MenuItemModel[];

	constructor(options?: MenuItemInterface) {
		options = options || ({} as MenuItemInterface);
		this.label = options.label || '';
		this.url = options.url || '';
		this.icon = options.icon || '';
		this.styleClass = options.styleClass || '';
		this.submenu = (options.submenu || []).map(
			item => new MenuItemModel(item)
		);
	}
}
