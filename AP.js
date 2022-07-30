// value 可能是一个函数

class Ap extends Functor {
    ap(F){
        return Ap.of(this.val(F.val))
    }
}