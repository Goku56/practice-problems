const arr = [1, 2, 3, 4, 5];

//Map 
Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
}

let ans = arr.myMap((d) => d * 2);
console.log(ans)
