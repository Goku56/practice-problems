const arr = [1, 2, 3, 4, 5];

//forEach
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

let ans = arr.myForEach((d, i) => console.log(d, " : ", i));
console.log(ans)
