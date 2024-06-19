const arr = [1, 2, [3, 5, [4, 6]], 7];

Array.prototype.myFlat = function (depth) {
    let arr = [];
    if (!Array.isArray(this)) {
        throw new Error('Not an array');
    }

    this.forEach((d) => {
        if (Array.isArray(d) && depth > 0) {
            arr.push(...d.myFlat(depth - 1));
        } else {
            arr.push(d);
        }
    })
    return arr;
}

let ans = arr.myFlat(5);
console.log(ans)