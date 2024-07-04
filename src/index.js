const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const genDiff = (a, b) => {
    const result = {};
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    [...keys].map(k => {
        if (isObject(a[k]) && isObject(b[k])) {
            result[`  ${k}`] = genDiff(a[k], b[k]);
        } else {
            if (a[k] === b[k]) {
                result[`  ${k}`] = a[k];
            } else {
                if (Object.hasOwn(a, k) && !Object.hasOwn(b, k)) {
                    result[`- ${k}`] = a[k]; // del
                };
                if (Object.hasOwn(b, k) && !Object.hasOwn(a, k)) {
                    result[`+ ${k}`] = b[k]; // add
                }
                if (Object.hasOwn(b, k) && Object.hasOwn(a, k)) {
                    result[`- ${k}`] = a[k];
                    result[`+ ${k}`] = b[k]; // change
                }
            }

        }
    });
    return result;
}

export default genDiff;