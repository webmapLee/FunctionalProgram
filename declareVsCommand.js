//命令式
let arr = [];
let users = [{name: 'John', email: 'james@gmail.com'}, {name: 'Bob', email: 'Bob@gmail.com'}];
for(var i = 0; i < users.length; i++) {
    arr.push(users[i].name);
}

//声明式
arr = users.map(name => users.name)