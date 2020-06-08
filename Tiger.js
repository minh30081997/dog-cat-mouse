function Tiger(name) {
    this.name = name;
    this.stomach = [];
}

Tiger.prototype.eat = function (cat) {
    this.stomach.push(cat);
}

module.exports = Tiger;