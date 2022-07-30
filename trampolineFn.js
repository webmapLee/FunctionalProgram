//正常递归函数
function sum(a, b) {
    if(b > 0){
        return sum(a + 1,b-1)
    }else{
        return a
    }
}

//蹦床函数
function trampoline(f){
    while(f && f instanceof Function){
        f = f()
    }
    return f
}

function sum2(a, b) {
    if(y > 0){
        return sum.bind(null,a+1,b-1)
    }else{
        return x
    }
}
trampoline(sum2(1,1000000))