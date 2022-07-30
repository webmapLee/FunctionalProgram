//惰性链
const trace = (msg) => console.log(msg)
let square = (x) => Math.pow(x,2)
let isEven = (x) => x % 2 === 0

square = R.compose(R.tap(()=>trace('square')),square)
isEven = R.compose(R.tap(()=>trace('even')),isEven)

const numbers = _.range(200)
const result = _.chain(numbers)
  .map(square)
  .filter(isEven)
  .take(3)
  .value()

console.log(result)
