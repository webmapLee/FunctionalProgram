## 函数式编程理解

### 术语
 - 函子
 - 变形关系
 - 态射
 - 纯函数 柯里化
 - 函数组合
 - Point Free
 - 声明式 命令式
 - 惰性求值
 - 幂等性

### 通俗理解
f(x) = y
复杂的函数拆解为简单的函数
函数是一等公民
- 没有if,switch 判断
- 引用透明（固定输入，固定输出）
- 不依赖任何外部变量
- 没有“副作用”
- 变量不可变
- map & reduce

### 结合redux理解

store -> Container
currentState -> _value
action -> f 变形关系
reducer/mutation 接受action -> map
middleware -> IO 函子

### 示例
```javascript
fn(fn1(fn2()))
composition(fn1,fn2,fn3)
```
每一个函数就是一个函子

## 函数组合子

### 辅助组合子
无为(nothing)，照旧(identity)，默许(defaultTo)，恒定(always)

### 函数组合子
收缩（gather）、展开（spread）、颠倒（reverse）、左偏（partial）、右偏（partialRight）
柯里化（curry）、弃离（tap）、交替（alt）、补救（tryCatch）、同时（seq）
聚集（converge）、映射（map）、分拣（useWith）、规约（reduce）、组合（compose）

### 谓语组合子
过滤（filter）、分组（group）、排序（sort）

### 其它
组合子变换 juxt

SKI 组合子

### 相关库
 - ReJS
 - lodashJS
 - cycleJS
 - underscoreJS
 - ramdajs
