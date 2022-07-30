//传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

const partial = (f,...args)=>(...moreArgs)=>f(...args,...moreArgs)
const add3 = (a,b,c) => a + b + c
const fivePlus = partial(add3,2,3)
console.log(fivePlus(4))

//bind实现
const add1More = add3.bind(null,2,3)
console.log(add1More(6))