const user_1 = {
    name: "John"
}

const user_2 = {
    name: "Doe"
}

function printFullName(age) {
    console.log(`Hello ${this.name} and age is ${age}`)
}

Function.prototype.myCall = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error("not callable");
    }

    obj.fn = this;
    obj.fn(...args);
}

Function.prototype.myApply = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error("not callable");
    }

    if (!Array.isArray(...args)) {
        throw new Error("not array");
    }

    obj.fn = this;
    obj.fn(...args)
}

Function.prototype.myBind = function (obj = {}, ...args1) {
    if (typeof this!== 'function') {
        throw new Error("not callable");
    }

    obj.fn = this;
    return function (...args2) {
        obj.fn(...args1,...args2)
    }
}

printFullName.myCall(user_1, 20);
printFullName.myApply(user_2, [20]);
let ans = printFullName.myBind(user_2);
ans(20)
