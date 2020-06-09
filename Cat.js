let Mouse = require('./Mouse');
function Cat(name) {
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(animal) {
    if (animal instanceof Mouse) {
        this.stomach.push(animal);
        animal.die();
    }
    else {
        throw new Error('Error ...!!! Cat only eat Mouse');
    }

}

module.exports = Cat; 