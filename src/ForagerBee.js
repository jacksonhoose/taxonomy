var ForagerBee = function(age, job, canFly, color) {
  age = age || 10;
  job = job || 'find pollen';
  color = color || 'yellow';
  Bee.call(this, age, job, color);
  this.canFly = canFly === undefined ? true : canFly;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}
ForagerBee.prototype.constructor = ForagerBee;
