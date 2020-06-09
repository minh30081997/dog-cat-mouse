let Dog = require('./Dog');
let Mouse = require('./Mouse');
let Cat = require('./Cat');

let wolf = new Dog('Wolf');
let jerry = new Mouse('Jerry');
let tom = new Cat('Tom');

// tom.eat(jerry);
// tom.eat(wolf);

try {
    tom.eat(wolf);
}

catch(e) {
    console.log(e.message);
}

console.log(tom.stomach);
