"use strict"


let user1 = {
    "name": "보라",
    admin() {
        alert("관리자 계정");
    },
}

let user2 = {
    "age": 16,
}

// user1.admin?.();
// user2.admin?.();

let key = "name";

alert(user1?.[key]);
alert(user2?.[key]);


// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.value += Number(prompt("숫자 하나 입력해보세요", "2"));
//     };
// }



// let accumulator = new Accumulator(1); // 최초값: 1

// accumulator.read(); // 사용자가 입력한 값을 더해줌
// accumulator.read(); // 사용자가 입력한 값을 더해줌

// alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함


// function Calculator() {
//     this.read = function() {
//         this.num1 = Number(prompt("값을 입력하세요","2"));
//         this.num2 = Number(prompt("값을 입력하세요","3"));
//     };

//     this.sum = function() {
//         return (this.num1 + this.num2)
//     };

//     this.mul = function() {
//         return (this.num1 * this.num2)
//     };
// }



// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );




// function A() { 
//     return gori;
// }

// function B() { 
//     return gori;
// }

// let gori = {
//     "name": "고릴라"
// }

// let a = new A;
// let b = new B;

// alert( a == b ); // true



// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//       alert( this.step );
//       return this
//     }
//   };

//   ladder.up().up().down().showStep(); // 1


// const calculator = {

//     read: function() {
//         this.num1 = Number(prompt("숫자 1개를 입력해주세요.","4"));
//         this.num2 = Number(prompt("숫자 1개를 입력해주세요.","3"));
//     },

//     sum: function(num1, num2) {
//         return (this.num1 + this.num2)
//     },

//     mul(num1, num2) {
//         return (this.num1 * this.num2)
//     },
// }

// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());








// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   };
  
//   let user = makeUser();
  
//   alert( user.ref.name ); // 결과가 어떻게 될까요? "John"이겠지? 헐 아니네. 이건 사실
// 오브젝트의 메소드 형태로 this를 불러내면 object를 this가 참조하지만, 그렇지 않으면 아니다.. 라는 것

 


// const user = {
//     "firstName": "보라",
//     sayHi() {
//         let arrow = () => alert(this["firstName"]);
//         arrow();
//     }
// };

// user.sayHi();

// let salaries = {
//     "John": 100,
//     "Ann": 160,
//     "Pete": 130,
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// confirm("직원 월급의 총합은 "+sum);

// let user = {};

// user.name = "John";
// user["surname"] = "Smith";
// user["name"] = "Pete";

// for (let prop in user) {
//     alert(prop);
//     alert(user[prop]);
// }

// delete user.name;

// for (let prop in user) {
//     alert(prop);
//     alert(user[prop]);
// }