//类似于if else,有左函子，右函子

var Either = function (left, right) {
    this.left = left
    this.right = right
}

Either.of = function (left, right) {
    return new Either(left, right)
}

Either.prototype.map = function (f) {
    return this.right ? Either.of(this.left, f(this.right)) : Either.of(this.right, f(this.left));
}