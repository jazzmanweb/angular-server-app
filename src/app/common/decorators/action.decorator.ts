export function ActionDecorator() {
	return (target: any, propertyKey: string) => {
		target[propertyKey] = '[' + target.name + ']' + propertyKey;
	};
}
