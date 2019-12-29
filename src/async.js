// console.log(async function() {
//     // return 4;
//     throw new Error('err')
// }())

// console.log(function() {
//     return new Promise((resolve, reject) => {
//         // resolve(4);
//         reject(new Error('err'))
//     })
// }())

/**
 * async/await
 * async function 是 Promise 的语法糖封装
 * 异步编程的终极方案-以同步的方式写异步
 */

const result = async function () {
    let content = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 500)
    })

    // 等待并行的任务执行完毕
    await Promise.all([
        interview(1),
        interview(2)
    ])
console.log(content);
}()

setTimeout(() => {

})

console.log(result);

/**
 * await 可以暂停 async function 的执行
 * await 可以以同步的方式获取 Promise 的执行结果
 * try-catch 可以获取 await 所得到的错误，即便函数在另一个事件循环中
 */



