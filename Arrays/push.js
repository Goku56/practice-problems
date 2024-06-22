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
// arr.myPop()
// console.log(ans2)

Array.prototype.myShift = function () {
    let ans = this[0];
    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return ans;
}

Array.prototype.myUnShift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
}

arr.myShift()

console.log(arr)
console.log(arr.length)