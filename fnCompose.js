//函数组合主要是解决，函数深层次嵌套的问题
//将函数通过拼积木的方式来实现功能

const compose = (f,g) => (x => f(g(x)))
let f = arr => arr[0]
var reverse = arr => arr.reverse()
let last = compose(first,reverse)
last([1,2,3,4,5,6,7,8])

//投影函数 filter map

//组合子，管道，改变顺序