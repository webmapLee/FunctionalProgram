var Container = function(x){
    this._value = x
}
// Container.of = x => new Container(x)

// Container.prototype.map = (fn)=>{
//     return Container.of(fn(this._value))
// }

Container.prototype.map = function(fn){
    console.log('🐻',this._value)
    //这里new Container 看的像面向对象，就把它丢到of中了，羊毛出在羊身上
    return new Container(fn(this._value))
}

const result = new Container(3)
    .map(x => x + 1)
    .map(x => x * x)
    .map(x => 'result is ' + x)

console.log('result',result)
