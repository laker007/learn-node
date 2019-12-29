// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject(3);
//     }, 500)
// }).then(function (res) {
//     console.log(res)
//  }).catch((err) => {
//      console.log(err)
//   }).finally((res) => {
//       console.log(res)
//    })

// console.log(promise);

// setTimeout(() => {
//     console.log(promise);
// }, 800)


// 执行 then 和 catch 会返回一个新的 Promise ，该 Promise 最终状态根据 then 和 catch 的回调函数的执行结果决定
// 如果回调函数最终是 throw，该 Promise 是 reject 状态
// 如果回调函数最终是 return，该 Promise 是 resolve 状态
// 如果回调函数最终是 return 了一个 Promise，该 Promise 会和回调函数return 的 Promise 保持一致
function interview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0) {
                resolve('success')
            } else {
                reject(new Error('fail'));
            }
        }, 500)
    })
}

let promise = interview();

let promise2 = promise.then(() => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('accept');
        }, 200)
        setTimeout(() => {
            reject('refuse');
        }, 400)
    })
})

setTimeout(() => {
    console.log(promise);
    console.log(promise2);
}, 800)

setTimeout(() => {
    console.log(promise);
    console.log(promise2);
}, 1000)

Promise.all([
    interview('jikebang'),
    interview('tencent')
])