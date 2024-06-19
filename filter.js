const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            res.push(this[i])
        }
    }
    return res;
}

let ans = arr.myFilter((d) => d >= 2);
console.log(ans)