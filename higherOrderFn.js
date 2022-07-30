
//while 主线程堵了
var add = function(a,b){
    return a+b
}
function math(fn,arr){
    return fn(arr[0],arr[1])
}
math(add,[1,2])