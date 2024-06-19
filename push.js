Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

let arr = [1, 2, 3, 4, 5];

// let ans = arr.myPush(6, 7, 8);

// console.log(ans);
// console.log(arr);

Array.prototype.myPop = function () {
    let ans = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return ans;
}
// arr.pop()
arr.myPop()
// console.log(ans2)
console.log(arr)
console.log(arr.length)