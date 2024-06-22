const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, 1000)
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, 2000)
})



Promise.prototype.myPromiseAll = function (promiseArray) {
    return new Promise((resolve, reject) => {
        if (promiseArray.length === 0) {
            resolve([])
        }

        let count = 0;
        let result = [];
        promiseArray.forEach((promise, index) => {
            promise.then((data) => {
                count++;
                result[index] = data
                if (count == promiseArray) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

const data = Promise.myPromiseAll([promise1, promise2])
data.then((d) => {
    console.log(d)
}).catch((err) => {
    console.log(err)
})