// 回调函数方式处理异步请求
interview(function (res) {
    if (res instanceof Error) {
        return console.log('cry');
    }
    console.log('smile');
})

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.1) {
            callback(null, 'success');
        } else {
            callback(new Error('fail'))
        }
    }, 500);
}

// 但是回调函数方式处理异步请求，容易造成回调地狱