let os = require('os');

console.log(os.cpus());

// 非阻塞 IO
let glob = require('glob');

let result1, result2;
console.time('glob block');
// 同步调用的方式
// 执行期间 NodeJS 无法做其他事情
result1 = glob.sync(__dirname + '/**/*');
console.timeEnd('glob block');
// console.log(result);

console.time('glob no block');
// 异步调用的方式
glob(__dirname + '/**/*', (err, result) => {
    console.log(err);
    // console.log(result);
});
console.timeEnd('glob no block');
console.log(1+1);


