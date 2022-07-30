//惰性求值
var object = {a: 1, b: 2, c: 3, d: 4}
var values = _.memoize(_.values)
values(object)
object.a = 6
console.log(values.cache.get(object))

const alt = _.curry((fn1,fn2,val)=>fn1(val) ||fn2(val))
const showResult = _.compose(fn,alt(alt(aa,bb)))
showResult({})