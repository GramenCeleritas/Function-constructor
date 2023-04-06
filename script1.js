var myObj = {};

checkEmptyObject(myObj);

function checkEmptyObject(obj) {
  if (Object.keys(obj).length === 0) {
    alert("Object is empty");
  }
}


var user = {
  name: "Vadym",
  age: 30,
  sayHello: function() {
    return "Hello, I'm " + this.name + ", I'm " + this.age;
  }
};

alert(user.sayHello());

var calculator = {
  num1: 0,
  num2: 0,
  ask: function() {
    this.num1 = parseFloat(prompt("Enter the first number:"));
    this.num2 = parseFloat(prompt("Enter the second number:"));
  },
  sum: function() {
    return this.num1 + this.num2;
  },
  mul: function() {
    return this.num1 * this.num2;
  }
};

calculator.ask();
console.log(calculator.sum());
console.log(calculator.mul()); 