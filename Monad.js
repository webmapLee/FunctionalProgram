Maybe.of(Maybe.of(Maybe.of({name:'liyb',age:23})))
class Monad extends Functor {
    join(){
        return this.val
    }
    flatMap(f){
        return this.flatMap(f).join()
    }
}