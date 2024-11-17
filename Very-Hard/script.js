function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

Person.prototype.exercise = function() {
  console.log(`${this.name} says: "Running is fun! - said no one ever"`);
}

Person.prototype.fetchJob = function() {
  console.log(`${this.name} is a ${this.job}`);
}

function Programmer()