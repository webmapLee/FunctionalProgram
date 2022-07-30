/**
柯里化解释：
    传递较少的参数，剩余的参数可以延后传递，也可以理解为对参数的缓存
*/

// 柯里化式对偏应用的改造
var compareValue = num1 => (num2 => num1 > num2)
var checkNum1 = compareValue(12)
checkNum1(23)

//柯里化之前
function add(x,y){
    return x + y
}

//柯里化之后
function addX(y){
    return function(x){
        return x + y
    }
}

addX(2)(3)

// 反柯里化
Function.prototype.uncurring = function(){
    var _self = this
    return function(){
        var obj = Array.prototype.shift.call(arguments)
        return _self.apply(obj, arguments)
    }
}
var push = Array.prototype.push.uncurring()
var obj = {}
push(obj,'first','two')
console.log(obj)

/**
 * @description: 
 * 结合递归以及立即执行函数，不断添加参数，直至所需参数全部到位，执行函数
 * @param {*} fn
 * @param {*} arr
 * @return {*}
 */
const curry = (fn,arr = []) => (...args)=>
    (arg => (arg.length === fn.length?fn(...arg):curry(fn,arg)))([
        ...arr,
        ...args
    ])
var curryTest = curry((a,b,c,d) => a + b + c + d)
curryTest(1,2,3)(4)
curryTest(1,2)(3,4)

//bind实现
function fn(p1,p2){
    this.value = p1 + p2
}
var f1 = fn.bind(null,'a')
var f2 = new f1('b')
console.log(f2.value)

//setTimeout 示例
const setTimeoutWraper = (timeout,fn)=>{
    setTimeout(fn,timeout)
}
const delay = curry(setTimeoutWraper)(100)
delay(()=>console.log('aaa'))
delay(()=>console.log('bbb'))
