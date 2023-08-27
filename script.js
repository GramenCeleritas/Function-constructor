// function createUser(name, age, gender) {
//   if(gender !== 'male' && gender !== 'female') {
//       console.error(`Unknown gender ${gender} for user ${name}`)
//       return null;
//   }
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//     getNameAndAge: function() {
//       return `${this.name} is ${this.age} years old`;
//     },

//     isAdult: function() {
//       return this.age >= 18;
//     },

//     getPersonalPronounceByGender: function() {
//       return this.gender === 'male' ? 'he' : 'she';
//     }
//   };
// }

// const showMessage = function(user) {

//   if(!user) {
//       return;
//   }

//   const userInfo = user.getNameAndAge();

//   const presonalPronouns = user.getPersonalPronounceByGender()

//   if(user.isAdult(user)) {
//       console.log(`${userInfo} and ${presonalPronouns} is adult` );
//   } else {
//       console.log(`${userInfo} and ${presonalPronouns} is not adult`);
//   }
// }

// const bill = createUser('Bill', 25, 'male');
// const william = createUser('John', 17, 'male');
// const mary = createUser('Mary', 19, 'female');
// const unknown = createUser('Unknown', 18, 'unknown')


// showMessage(bill);
// showMessage(william);
// showMessage(mary);
// showMessage(unknown);

////////////////////////////////////

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