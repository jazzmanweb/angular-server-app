export const enumValues = (enumObject: any): string[] => {
    const arr: string[] = [];
    for (const i of Object.keys(enumObject)) {
        arr.push(enumObject[i]);
    }
    return arr;
};
