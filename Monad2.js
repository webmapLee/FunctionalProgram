var fs = require('fs');
var _ = require('lodash');

class Functor{
    constructor(val){
        this.val = val
    }
    map(f){
        return new Functor(f(this.val))
    }
}

class Monad extends Functor{
    join(){
        return this.val
    }
    flatMap(f){
        //1.f 接受一个函数返回的IO函子
        //2.this.val 等于上一步的脏操作
        //3.this.map(f) compose(f,this.val) 函数组合 手动执行
        //4.返回这个组合函数并执行，注意先后顺序
        return this.map(f).join()
    }
}

var compose = _.flowRight

class IO extends Monad{}

var readFile = function(path){}

var print = function(name){}

var tail = function(param){}