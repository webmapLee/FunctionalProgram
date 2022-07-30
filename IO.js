// 处理副作用，脏操作
import _ from 'lodash';
var compose = _.flowRight

var IO = function (f){
    this._value = f
}
IO.of = x => new IO(_ => x)
IO.prototype.map = function(f){
    return IO.of(compose(f,this._value))
}
