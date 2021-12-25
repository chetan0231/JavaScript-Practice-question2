// solution 1

const arr = [5, 4, 1, 3];
num = 2;

function getIndex(arr, num) {
  const newArr = arr.concat(num);
  // console.log(newArr)
  newArr.sort();
  // console.log(newArr)
  return newArr.indexOf(num);
}

console.log(getIndex(arr, num));

//Solution 2 :

// arr = [{name: "Kelly"}, {name: "Anna"}]

// const [first,second] = arr
// console.log(second.name)

// Solution 3

// function Human(name,age){

//     this.name= name;
//     this.age = age;

// };

// function Man(name) {
//     this.name = name
// };

// Man.prototype = Object.create(Human.prototype)

// function check(){

//     var obj = new Man("Tommy Tan");

//     console.log(obj.name)

//     console.log(obj instanceof Human)

// }
// check()
