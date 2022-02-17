"use strict"




function Calculator() {
    this.methods = {
        "+": function(a,b) {return a + b},
        "-": function(a,b) {return a - b},
    }

    this.calculate = function(str) {
        let piece = str.split(" ");
        if (
            (isFinite(piece[0]) === false) ||
            (isFinite(piece[2]) === false) ||
            ((piece[1] in this.methods) === false)
        ) {return alert("형식에 맞게 입력해주세요.\n형식: '숫자 연산자 숫자'")}       
        return this.method[piece[1]](Number(piece[0]),Number(piece[2]))
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}






// function Calculator() {

//     let operator = ["+","-"];

//     this.calculate = function(str) {
//         let piece = str.split(" ");
//         if (!(isFinite(piece[0]) && isFinite(piece[2]))) {
//             return alert("문자열의 맨 앞과 맨 뒤에는 숫자만 입력해주세요.")
//         }
//         piece[0] = Number(piece[0]);
//         piece[2] = Number(piece[2]);
//         return piece[0] operator piece[2]
//     }
//     this.addMethod = function(name, func) {
        
//     }
// }







// function copySorted(arr) {
//     let result = [].concat(arr);
//     result.sort();
//     return result
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)





// let arr = [5,2,1,-10,8];

// arr.sort((a,b) => {
//     return b - a
// });

// alert(arr); // 8, 5, 2, 1, -10


// function filterRangeInPlace(arr, min, max) {
//     for (let i = 0 ; i < arr.length ; i += 1) {
//         if (!((min <= arr[i]) && (arr[i] <= max))) {
//             arr.splice(i,1);
//             i -= 1;
//         }
//     }
// }


// function filterRangeInPlace(arr, min, max) {
//     arr.map((item, index, array) => {
//         (min <= item) && (item <= max) ? item : (array.splice(index,1))
//     });
// } // 이런 식으로 짜게 되면, splice를 실행한 순간에 이전 index였던 item이 날린 요소의 index에 할당되어서 2번 검사를 안함.


// let a = [1,2,3,4,5];



// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return ((user.age >= this.minAge) && (user.age < this.maxAge));
//     },
// }

// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30},
// ]

// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers);
// alert(soldiers.length);
// alert(soldiers[0]["age"]);
// alert(soldiers[0].age);
// alert(soldiers[1]["age"]);
// alert(soldiers[1].age);


// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);
// arr.reduce((sum, current, index, arr) => sum+current,0)

// alert(result); // 15



// let names = "Bilbo, Gandalf, Nazgul";

// let arr = names.split(", ");

// for (let name of arr) {
//     alert(`${name}에게 보내는 편지`);
// }



// let arr = [1,15,2,22]

// arr.reverse();

// alert(arr);


// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (제대로 정렬이 되지 않았습니다.)
// alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (제대로 정렬되었네요!)



// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }

//   let arr = [ 1, 2, 15 ];

//   arr.sort(compareNumeric);
  
//   alert(arr);  // 1, 2, 15

//   [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
//     return a - b;
//   });


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// alert(lengths);


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];
  
//   // 앞쪽 사용자 두 명을 반환합니다.
// let someUsers = users.filter(item => item.id < 3);
  
// alert(someUsers.length); // 2


// let users = [
//     {id: 1, name:"John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
// ];

// let result = users.findIndex((item, index) => (item.id === 3) && (index === 1));

// alert(result);


// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않습니다.)
// alert( arr.includes(NaN) );// true (NaN의 여부를 확인하였습니다.)


// let arr = [1,0,false];

// alert(arr.indexOf(0,2));
// alert(arr.indexOf(false,2));
// alert(arr.indexOf(null));

// let a = ["Bilbo", "Gandalf", "Nazgul"];

// a.forEach(alert);
// a.forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });


// let arr = [1,2];

// alert (arr.concat([3,4]));


// let arr = ["t","e","s","t"];

// alert(arr.slice(1,3));
// alert(arr.slice(0));


// let arr = ["I","go","home"];

// arr.splice(1, 0, "and","you");


// alert(arr[0]);

// alert(arr.length);

// alert(arr);



// function getMaxSubSum(arr) {
//     let max_sum = 0;
//     let partial_sum = 0;

//     for (let i of arr) {
//         partial_sum += i;        
//         max_sum = Math.max(partial_sum, max_sum);
//         partial_sum = Math.max(0, partial_sum);
//     }
//     return max_sum
// }


// function getMaxSubSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         let subsum = 0;
//         for (let j = i; j < arr.length; j += 1) {
//             subsum += arr[j];
//             sum = Math.max(sum, subsum);
//         }
//     }
//     return sum;
// }




/*
부분배열의 최대합을 찾기

(1) Brute Force
(2) Divide-and-Conquer
(3) Scanning(=Kadane's Algorithm)


[1,-2,3,-4,5,-5,6,-7]
(1) 그냥 모든 부분배열을 찾아서 그 배열의 합이 가장 큰 것을 구한다.
1 / 1,-2 / 1,-2,3 / 1,-2,3,-4 ...
이렇게 쭉 찾아서 이 합들 중에서 가장 큰 것을 찾는다.
-2 / -2,3 / -2~-4 / -2~5 ...
마찬가지로 이렇게 쭉 찾아서 이 합들 중에서 가장 큰 것을 찾는다.
3 / 3,-4 / 3~5 ...


최대합을 갖는 부분배열을 출력하는 문제
최대합을 갖는 부분배열의 개수를 출력하는 문제
최대합을 갖는 부분배열의 시작 index와 끝 index를 구하는 문제
*/











// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     let user_input;

//     user_input = prompt("숫자를 입력하세요", "3");

//     while (!(user_input === "" || user_input === null || !isFinite(user_input))) {
//         arr.push(Number(user_input));
//         user_input = prompt("숫자를 입력하세요", "3");
//     }


//     for (let i of arr) {
//             sum += i;
//         }
//     alert(`result의 결과는 ${sum}이고, arr은 ${arr}이다.`);
//     return sum;
// }

// sumInput();


// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// let styles2 = ["Jazz", "Blues","Rock-n-Roll", "Balad"];

// function insertClassics(arr) {
//     console.log(arr);
//     let center = Math.floor(arr.length / 2);
//     let rest = [];
//     if (arr.length % 2 === 0) {
        
//         for (let i = arr.length ; i > center ; i -= 1) {
//             let element = arr.pop();
//             rest.push(element);
//         }
//         arr[center] = "Classics"
//         for (let i = rest.length; i > 0; i -= 1) {
//             let element2 = rest.pop()
//             arr.push(element2);
//         }
        
//         arr.shift();
//         arr.unshift("Reggae");
//         arr.unshift("Rap");
        
//         return arr
//     }
//     else {
//         arr[center] = "Classics"
        
//         arr.shift();
//         arr.unshift("Reggae");
//         arr.unshift("Rap");
        
//         return arr
//     }
// }

// insertClassics(styles);

// insertClassics(styles2);


// 정중앙이 뭐지? 홀수 기준으로는 뒤에서 세었을 때랑 앞에서 세었을 때랑 동일한 위치에 있는 것

// 짝수 기준으로 정중앙은? 그냥 비어있다고 생각하고 추가하자.
// 만약 length % 2 === 0 이면, 뒤에꺼 다 자르고 어디에 저장하고나나서 Classics를 추가하고



// 1. 배열 정중앙에 있는 요소를 찾기
// 2. 그걸 바꾸기



// let fruits = ["사과", "배", "오렌지"]

// let shoppingCart = fruits;
// shoppingCart.push("바나나");

// alert(fruits.length); // 아마도 4가 나오겠지. 객체이고, 같은 배열에 대한 참조니까..?


// function extractCurrencyValue(str) {
//     return Number(String(str).slice(1));
// }


// function truncate(str, maxlength) {
//     if (String(str).length <= Number(maxlength)) return String(str)
//     return String(str).slice(0 , maxlength - 1) + "…"
// }

// function checkSpam(str) {
//     let result = String(str).toLowerCase();
//     return (result.includes("viagra") || result.includes("xxx"))
// }

// alert(checkSpam("ViAgrA"));
// alert(checkSpam("xxxxxx"));
// alert(checkSpam("inddd"));

// function ucFirst(str) {
//     return String(str).slice(0,1).toUpperCase() + String(str).slice(1);
// }



// alert( '𝒳'[0] ); // 이상한 기호가 출력됨
// alert( '𝒳'[1] );

// function randomInteger(min, max) {
//     return Math.round((min - 0.5 + Math.random() * (max - min + 1)))
// }

// function random(min, max) {
//     return min + (Math.random() * (max - min))
// }





// function readNumber() {
//     let result = prompt("숫자 입력할 때까지 물어볼거다", "");
//     if (result === null) {
//         alert(null);
//         return null
//     } else if (result === "") {
//         alert(null);
//         return null
//     } else { 
//         while (isNaN(result)) {
//             result = prompt("숫자 입력할 때까지 물어볼거다", "");
//         }
//         alert(result);
//         return Number(result);
//     }
// }
// if 안에 반복문을 넣는 것은 정말 좋지 않다. 안 넣는 방법을 최대한 찾아볼 것.
// if / switch 한 다음에 반복문 돌릴 수 있는건 나쁘지 않음(지금 내 방법 그렇게 나쁘진 않다)
// 다만 반복문 안에 조건문 넣는거는 매번 반복할 때마다 체크해야하니까 진짜 구린 방법이 맞다.
// 기왕이면 스위치문 쓰는게 enum으로 컴파일러가 변환하기 좋아서 좋다.
// 소수점 계산에서는 정확한 equlity 비교를 피하는게 좋다. 0.2 + 0.2 === 0.4가 false다.




// function readNumber() {
//     let result;
//     do {
//         result = prompt("숫자 입력할 때까지 물어볼거다", "");
//     } while (!isFinite(result))

//     switch(result) {
//         case null:
//         case '':
//             return null
//         default:
//             return Number(result)
//     }
// }


// readNumber();


// (1) 아무 입력도 안 하면, ""이 들어옴. 이건 숫자로 변환시 0이 됨.
// (2) 취소를 누르면, null이 들어옴. 이건 숫자로 변환시 0이 됨.
// 즉, 둘다 isNaN시에 False가 떨어지고, isFinite시에 True가 떨어짐.
// if (result = null) -> return null
// if (reuslt = "") -> return null
// while (isNaN(result)) { prompt}


// alert ( Math.round(6.35 * 10) / 10);



// let num1 = Number(prompt("첫 번째 숫자를 입력해주세요.","3"));
// let num2 = Number(prompt("두 번째 숫자를 입력해주세요.","4"));

// alert(num1+num2);




// let billion = 1e9;
// let ms = 1e-6;
// let num = 255;

// alert(num.toString(16));
// alert(num.toString(4));

// Object.is(1,1);


// let welcome = "Hello";

// alert ( welcome.toUpperCase() );

// welcome.test = 5;

// alert(welcome.test); // 엄격모드에선 error임. wrapper 객체를 수정하려고 할 때 에러가 발생.
// 애초에 래퍼 객체는 메서드 부르고 즉시 삭제되기 때문에...


// let user = {
//     "name": "John",
//     "money": 1000,
//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// }

// const id1 = Symbol.for("id");
// const id2 = Symbol.for("id");
// alert(Symbol.keyFor(id1));


// alert(id1 === id2);

// let sangjae = Symbol(1);
// let ggbb = Symbol(1);

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false

// let user1 = {
//     "name": "보라",
//     admin() {
//         alert("관리자 계정");
//     },
// }

// let user2 = {
//     "age": 16,
// }

// // user1.admin?.();
// // user2.admin?.();

// let key = "name";

// alert(user1?.[key]);
// alert(user2?.[key]);


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
