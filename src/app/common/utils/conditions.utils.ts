export function  isPrimitive(value: any): boolean {
	return (
		!!value &&
		(typeof value === 'string' ||
			typeof value === 'number' ||
			typeof value === 'boolean')
	);
}