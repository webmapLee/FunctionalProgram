//常见写法
const f = str => str.toUpperCase().split(' ')

//point free 更方便的组合
var toUppercase = word => word.toUpperCase()
var split = x => (str => str.split(x))

var c = compose(split(' '),toUppercase)
c('a b')