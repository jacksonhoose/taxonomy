var Bee = function(age, job, color) {
  age = age || 5;
  color = color || 'yellow';
  Grub.call(this, age, color);
  this.job = job || 'Keep on growing';


};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
