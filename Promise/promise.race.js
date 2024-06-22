Promise.prototype.myRace = function (promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise) => {
            promise.then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    })
}