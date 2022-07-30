//尾递归优化

function sum(x, total) {
    if (x === 0) {
        return x + total
    }
    return (x - 1, x + total)
}

/**
 * 这儿有一个问题
 * 如果sum 不返回递归函数
 * 那么这儿就失效了
 * @param {*} f 
 * @returns 
 */
function tro(f) {
    var value, active = false, accumulated = []
    return function () {
        accumulated.push(arguments)
        if (!active) {
            active = true
            //这儿比较难理解
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift())
            }
            active = false
            return value
        }
    }
}

//注意这儿的sum是tco返回的函数
var sum = tro(function (x, y) {
    if (y > 0) {
        //这儿执行sum 的时候，由于上下文式 tco 返回的函数，所以会执行tco返回的那个函数
        return sum(x + 1, y - 1)
    }else if( x > 1000){
        return sum(x + 2, y - 1)
    }else {
        return x
    }
});

sum(1, 100000)