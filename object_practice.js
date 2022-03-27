"use strict"





// 2022-03-27 이 부분은 다시 보자. replacer 매우 귀찮지만 제대로 알긴해야할듯
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
//   };
  
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));
  
//   /*
//   {
//     "title":"Conference",
//     "occupiedBy":[{"name":"John"},{"name":"Alice"}],
//     "place":{"number":23}
//   }
//   */






// let user = {
//     name: "John Smith",
//     age: 35
// };

// let user2 = JSON.parse(JSON.stringify(user));







// let student = {
//     "name": 'John',
//     "age": 30,
//     "isAdmin": false,
//     "courses": ['html', 'css', 'js'],
//     "wife": null,
// };

// let json = JSON.stringify(student);

// alert(typeof(json));

// alert(json);














// function formatDate(date) {
//     let now = new Date();
//     let timeGap = (now.getTime() - date.getTime()) / 1000
//     if (1 > timeGap) {
//         // console.log(timeGap);
//         // date에 넣은 milli초 단위 time stamp를 비교해서 1000보다 차이가 안나면 true
//         return "right now";
//     } else if (60 > timeGap) {
//         // console.log(Math.round(timeGap));
//         // date에 넣은 millli초 단위 time stamp 비교해서 1000 * 60 보다 차이가 안나면 1000나눈 값을(초단위) 
//         // n으로 놓고, + 초전 출력
//         return Math.round(timeGap) + " sec. ago";
//     } else if (3600 > timeGap) {
//         // console.log(Math.round(timeGap));
//         return Math.round(Math.round(timeGap)/60) + " min. ago";
//     }
//     let d = [
//         "0" + String(date.getDate()),
//         "0" + String(date.getMonth()+1),
//         String(date.getFullYear()),
//         "0" + String(date.getHours()),
//         "0" + String(date.getMinutes())
//     ];
//     return `${d[0].slice(-2)}.${d[1].slice(-2)}.${d[2].slice(-2)} ${d[3].slice(-2)}:${d[4].slice(-2)}`;
// }


// function getSecondsToTomorrow() {
//     let now = new Date();
//     let nextDayZero = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//     return Math.round((nextDayZero.getTime() - now.getTime()) / 1000);
// }



// function getSecondsToday() {
//     // 구해야하는거 (1) today의 now (2) today의 now에서 today의 00:00을 빼는 것.
//     // (2)는 새로운 객체로 생성하되, now의 연-월-일 까지만 주자.
//     let now = new Date();
//     let todayZero = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     return Math.round((now.getTime() - todayZero.getTime()) / 1000);
// }

// alert( getSecondsToday() );


// function getLastDayOfMonth (year, month) {
//     let date = new Date(year, month+1, 0);
//     return date.getDate();
// }





// function getDateAgo(date, days) {    
//     let dummyDate = new Date(date.getMilliseconds());
//     dummyDate.setDate(date.getDate() - days);
//     return dummyDate.getDate();
// }
// // 내가 헷갈린건 객체의 참조와 복사였음.
// function getDateAgo(date, days) {
//     let dateCopy = new Date(date); 
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
// 바로 위가 정답이긴한데, new Date는 milliseconds만 받는건 아닌가보다. 어휴


// function getLocalDay(date) {
//     let europeanDays = [7,1,2,3,4,5,6];    
//     // 월요일부터 생각해보자. 일단 date.getDay(월요일) === 1이 됨.
//     // 토요일은? date.getDay(토요일) === 6이 됨.
//     // 일요일은? date.getDay(일요일) === 0 이 되는데, 이거에만 + 7 해주자.
//     return europeanDays[date.getDay()];
// }



// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
//     return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 2014년 1월 3일
// alert( getWeekDay(date) ); // FR
// 정답. 배열 해서 반환받는 값을 index로 쓰면 편할 것을...


// function getWeekDay(date) {
//     let day = date.getDay();

//     switch(day) {
//         case 0: "SU";
//             return "SU";
//         case 1: "MO";
//             return "MO";
//         case 2: "TU";
//             return "TU";
//         case 3: "WE";
//             return "WE";
//         case 4: "TH";
//             return "TH";
//         case 5: "FR";
//             return "FR";
//         case 6: "SA";
//             return "SA";
//     }
// }
// 내가 그냥 Switch 문으로 짜면 뭔가 성능에 좋을거 같아서 썼는데, 유지보수에는 구릴 듯.

// alert (getWeekDay(date));

// let date = new Date(2012,1,20,3,12);

// alert(date);










// let date = new Date();

// alert(date.getTime());


// let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// // 원하는 작업을 수행
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // done

// alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` ); 





// let start = new Date();

// for (let i = 0; i < 100000; i+=1) {
//     let doSomething = i * i * i;
// }

// let end = new Date();

// alert(`반복문 모두 도는데 ${end - start} 밀리초가 걸림`);

// let date = new Date();

// alert(date);






// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaryObject) {
//     if (Object.entries(salaryObject).length === 0) {
//             return null;
//         }

//     let salary = 0;
//     let top;
    
//     for (let keyValuePair of Object.entries(salaryObject)) {
//         if (salary < keyValuePair[1]){
//             ([top = "noname", salary] = keyValuePair);
//         }
//     }
//     return top;
// }




// let user = { name: "John", years: 30 };

// // 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
// // ... = user

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false








// 중첩 구조분해
// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
  
//   // 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
//   let {
//     size: { // size는 여기,
//       width,
//       height
//     },
//     items: [item1, item2], // items는 여기에 할당함
//     title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
//   } = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   alert(item1);  // Cake
//   alert(item2);  // Donut




// let arr = ["Bora", "Lee"]

// let [firstName, surname] = arr;

// alert(firstName);
// alert(surname);

// // 할당 연산자 우측엔 모든 이터러블이 올 수 있다.
// let [a,b,c] = "abc";
// let [one, two] = new Set([1,2,3]);

// let obj = {
//     "title": "Menu",
//     "option": "Large",
//     "price": 1500,
// };

// let {width: w = 100, title, ...restOfObject} = obj;









// let user = {
//     "name": "John",
//     "age": 30,
// };

// function count(obj) {
//     let result = 0;
//     for (let property of Object.keys(obj)) {
//         result += 1;
//     }
//     // 사실 이 경우에는 length 써도 되긴함. 다만 항상 맞는 수가 아닐 수 있다고 생각하여 정확하게 세보았음.
//     return result;
// }




// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
// };

// function sumSalaries(salaryObject) {
//     let result = 0;
//     let salaryArray = Object.values(salaryObject);
//     for (let salary of salaryArray) {
//         result += salary;
//     }
//     return result;
// }











// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// keys.push("more");







// function aclean(arr) {

//     let map = new Map();

//     for (let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
// }
// // 이거는... 일단 이 부분이 핵심임. map 객체에 같은 key로 다른 value를 할당하면
// // 그냥 덧씌워진다는 것.
// // 그러나 그 반복을 어떻게 잡을지도 많이 헤맸다(사실 이게 더 큰 문제)
// // 왜냐하면 각 워드당 비교하는 작업을 해서 3개의 요소를 가진 배열을 미리 만들어버렸거든.
// // 그러다보니 그 3개 요소를 어떻게 하면 기존 7개 요소랑 비교할지에 대해서 막혔는데, 사실 애초에 7번 반복할때
// // 그 즉시 같이 처리해도 되는 문제였음. 미리 만들었을 때의 문제점을 더 분석했으면
// // 이럴 일이 없었을 것. 아오 젠장.


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );










// function unique(arr) {
//     let result_set = new Set();
//     for (let element of arr) {
//         result_set.add(element);
//     }
//     return result_set
// }
// 이건 최종 반환값으로 Set을 내놓게 되니까 아닌 것임.


// function unique(arr) {
//     let result_set = new Set(arr);
//     return Array.from(result_set)
// }

// let values = new Array(
//     "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Hare", "Hare", ":-O", 1, 3, {"name": "John"}, ["배열1",2,3,"배열4"]
// );


// alert( unique(values) );







// let setexample = new Set(["oranges", "apples", "bananas"]);

// // for (let fruit of set) {
// //     alert(fruit);
// // }

// setexample.forEach((fruit, index, set) => alert(`${fruit} is an unique element, no index, finding index, you
// will see ${index} again, and then see the set ${set}'s size: ${set.size}`));



// // set은 "중복을 허용하지 않는" 값을 모아놓은 특별한 컬렉션이다. 
// // map은 정해진 순서가 없다. set은? 있느지 없는지 모르겠지만 배열처럼 중요하진 않은 듯
// // 순서가 있긴 한데, 추가한 순서대로인듯함? index는 없다.
// // 맵과 셋에 반복 작업을 할 땐, 해당 컬렉션에 요소나 값을 추가한 순서대로 반복 작업이 수행됩니다. 
// // 따라서 이 두 컬렉션은 정렬이 되어있지 않다고 할 수 없습니다. 
// // 그렇지만 컬렉션 내 요소나 값을 재 정렬하거나 (배열에서 인덱스를 이용해 요소를 가져오는 것처럼) 
// // 숫자를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다.
















// let set = new Set();

// let mary = {"name": "Mary"};
// let john = {"name": "John"};
// let pete = {"name": "Pete"};


// set.add(pete);
// set.add(mary);
// set.add(john);

// set.add(john);
// set.add(pete);


// alert(set.size);

// for (let user of set) {
//     alert(user.name);
// }












// let map = new Map();
// map.set('banana',1);
// map.set('orange',2);
// map.set('meat',4);


// let obj = Object.fromEntries(map.entries());

// alert(map.get('banana'));
// // map에서 값 불러오는 형식은 get을 사용해야 한다. 객체에서 불러오는 .요소명 or [요소명]으로 쓰지마라
// alert(obj.orange);










// let obj = {
//     "name": "John",
//     "age": 30,
// };

// let map = new Map(Object.entries(obj));

// alert(map.get('name'));

// let prices = Object.fromEntries([
//     ['banana',1],
//     ['orange',2],
//     ['meat',4],
// ]);


// let prices2 = Object.fromEntries([
//     ['bn','b2','bn3'],
//     ['bc','bc2','bc3','bc4'],
//     ['bd'],
//     'be'
// ]);

// alert(prices.orange);




// // 객체와 배열과 map의 가장 큰 차이는 "키"를 어떻게 설정할 수 있냐임.
// // 객체는 "키"로 문자열 or 심볼만 가능
// // 배열은 "키"가 없는게 아니라, 정수형 index만 가능함. 그런데 사실 Key 형태로 부르는 거라고 하면 애매해지는 면이 있음.
// // 배열에 키/프로퍼티 문자열 추가는 가능한데... length에 영향을 미치진 않는다.
// // map은 "키"에 아무런 제한이 없다. 키로 "객체"도 둘 수 있따!
// // iterable 객체란
// // (1) 객체이며
// // (2) for ... of 등의 문법을 이용하여 각 요소를 반복할 수 있다
// // (3) 배열은 내장 iterable 객체이기 때문에 for of가 가능한 것.
// // (4) 배열 아닌 객체가 iterable이 되려면 symbol.iterator인 메소드를 정의해야하고, 
// // 해당 메소드는 인자가 없이 iterator 객체를 반환해야 한다.

// // let map = new Map();

// // map.set('1', 'str1');
// // map.set(1,'num1');
// // map.set(true,'bool1');

// // alert( map.get(1)   ); // 'num1'
// // alert( map.get('1') ); // 'str1'

// // alert( map.size ); // 3

// let recipeMap2 = new Map();

// recipeMap2.set(0, {"cucumber": 500});
// recipeMap2.set(1, {"tomatoes": 350});
// recipeMap2.set(2, {"eggs": 150});
// recipeMap2.set(3, [0,1,2,3]);
// recipeMap2.set(4, "키는 4지만 5번째 요소");
// recipeMap2.set("5", "키는 '5'지만 6번째 요소");
// recipeMap2.set("99", "키는 '99'이지만 7번째 요소");


// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
// ]);

// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable);
// }
// // 여기서 recipeMap.keys()로 뽑힌 키를 모아놓은 반복가능한 객체에다가 뭔짓을 하는 것임. recipeMap에 뭔짓 하는게 아님


// for (let amount of recipeMap.values()) {
//     alert(amount);
// }
// // recipeMap.values()로 뽑힌 값을 모아놓은 반복가능한 객체에다가 뭔짓을 하는 것임. recipeMap에 뭔짓 하는게 아님

// for (let entry of recipeMap) {
//     alert(entry);
// }

// for (let entry of recipeMap.entries()) {
//     alert(entry);
// }
// // recipeMap과 recipeMap.entries는 동일함.

// recipeMap.forEach( (value, key) => {
//     alert(`${key}: ${value}`); // cucumber: 500 ...
// });
// // entry 보는거보다 정교하게, 각 key value에 접근 가능함.





// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// alert(slice(str, 1,3));
// alert(str.slice(1,3));


// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// };

// let arr = Array.from(range, (item,index) => item = `index ${index} is item ${item}`);
// alert(arr);


// let str = "𝒳😂";

// let chars = Array.from(str);

// alert(chars[0]);
// alert(chars[1]);
// alert(chars.length);



// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     "length": 2,
// };

// let arr = Array.from(arrayLike);
// alert(arr.pop());




// let str = "Hello";

// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value);
// }


// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// };
  
// for (let num of range) {
//     alert(num); // 1, then 2, 3, 4, 5
// }



// let range = {
//     "from": 1,
//     "to": 5,
// };

// range[Symbol.iterator] = function() {

//     return {
//         "current": this.from,
//         "last": this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { "done": false, "value": this.current++, };
//             } else {
//                 return { "done": true,};
//             }
//         }
//     };
// };

// for (let num of range) {
//     alert(num);
// }






// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
  
// let usersById = groupById(users);
  
// function groupById(userArray) {
//     let result = {};
//     for (let user of userArray) {
//         result[user.id] = user;
//     }
//     return result
// }

// function groupById(userArray) {
//     return userArray.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj
//     }, {})
// }
// 위 2개는 같고, reduce를 쓴 버전이라는 것만 다름. 근데 reduce를 써야만 하는 이유는 딱히 아직은 와닿지 않는다.

/*
// after the call we should have:
  
usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/





// function unique(arr) {
//     let result = [];
//     arr.forEach(function(item) {
//         if (!result.includes(item)) {
//             result.push(item);
//         }
//     })
//     return result
// }

// function unique(array) {
//     let result = [];  
//     for (let item of array){
//         if(!result.includes(item)) {
//             result.push(item);
//         }
//     }
//     return result
// }

// 위 2개는 같은 의미를 같지만, forEach 메소드를 사용할지, 일반적인 for (let a of b) 를 쓸지에 따라
// 다르게 작성할 수 있다. 참고용으로 둘 다 써둠. let .. of 는 배열에 최적화된 반복문이다. 그냥 for 문을 써도 충분하지만
// 웬만하면 for .. in 반복문은 진짜 쓰지 말자. 이건 객체용이다.

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
  
// alert( unique(strings) ); // Hare, Krishna, :-O
// f(n**2)의 시간복잡도를 갖기 때문에 최적의 답은 아니다.






// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(array) {
//     let sumOfage = 0;
//     for (let user of array) {
//         sumOfage += user.age;
//     }
//     console.log(array.length);
//     return sumOfage / array.length
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28




// function shuffle(array) {
//     array.sort(function(a,b) {
//         return (a - a + Math.random()) - (b - b + Math.random())
//     });
//     return array
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...


// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
//   // 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }
// 위의 검사에 의하면 이건 틀린 답인데 어차피 피셔-에이츠 셔플 알고리즘을 활용해야하기에 깊게 안 판다. 버려.


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(array) {
//     // array.sort((a,b) => a.age - b.age);
//     // array.sort((a,b) => {return a.age - b.age});
//     // array.sort(function(a,b) {return a.age - b.age});
//     // 위 3가지는 모두 같다. 이 참에 화살표 함수 좀 익숙해지라고 써봄.
//     return array
// }

// sortByAge(arr);

// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete




// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// // let usersMapped = users.map(function(item) {
// //     return {
// //         "fullName": item.name + " " + item.surname,
// //         "id": item.id,
// //     }
// // });


// let usersMapped = users.map((item) => {
//     return {"fullName": `${item.name} ${item.surname}`, "id": item.id,}
// });

// let usersMapped = users.map(item => {
//     return {"fullName": `${item.name} ${item.surname}`, "id": item.id,}
// });

// let usersMapped = users.map(item => ({"fullName": `${item.name} ${item.surname}`, "id": item.id,})
// );


// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith





// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// users.map(item => item.name);

// console.log(users);




// function Calculator() {
//     this.methods = {
//         "+": function(a,b) {return a + b},
//         "-": function(a,b) {return a - b},
//     };

//     this.calculate = function(str) {
//         let piece = str.split(" ");
//         if (
//             (isFinite(piece[0]) === false) ||
//             (isFinite(piece[2]) === false) ||
//             ((piece[1] in this.methods) === false)
//         ) {return alert("형식에 맞게 입력해주세요.\n형식: '숫자 연산자 숫자'")}       
//         console.log(piece[1]);
//         return this.methods[piece[1]](Number(piece[0]),Number(piece[2]))
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }






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

