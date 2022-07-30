//固定输入，固定输出，没有任何副作用
var arr = [1,2,3,4,5,6,7,8,9,10,11,12]

//纯函数
arr.slice(0,3)
arr.slice(0,5)

//不是纯函数，修改原数组
arr.splice(0,3)
arr.splice(0,6)