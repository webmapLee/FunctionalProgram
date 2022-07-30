//用于处理错误和异常，如果传入的值为空，函子内部并不会处理，就会出错
var Maybe = function(x){
    this._value = x;
}
Maybe.of = function(x){
    return new Maybe(x);
}

Maybe.prototype.map = function(f){
    return this.isNothing()?Maybe.of(null):Maybe.of(f(this._value));
}

Maybe.prototype.isNothing = function(){
    return (this._value === null || this._value === undefined)
}