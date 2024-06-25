function flattern(obj, parent = '') {
    let flat = {};
    const getFlat = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent + key;
            const value = obj[key]
            if (typeof value === 'object') {
                getFlat(value, newParent + '.');
            } else {
                flat[newParent] = value
            }
        }
        
        // for (let key in obj) {
        //     const newParent = parent + key;
        //     const value = obj[key];
        //     if (typeof value === 'object') {
        //         getFlat(value, newParent + '.');
        //     } else {
        //         flat[newParent] = value
        //     }
        // }
    }
    getFlat(obj, parent);
    return flat;
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5,
            h: {
                i: 6,
                j: 7
            }
        }
    }
}

console.log(flattern(obj, parent = ''));