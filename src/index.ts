export type AccessorFn = (item: any) => any;

export default function accessor(p : AccessorFn | string | bigint | boolean | number) : AccessorFn {
    if (typeof p === 'function')
        return p;

    if (typeof p === 'string')
        return (obj : object) => obj[p];

    return (_ : any) => p; // any constant
}
