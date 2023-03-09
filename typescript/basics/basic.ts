//* string
let userName1 = "Dave";
console.log(userName)

let str1:string;
str='Faizan';
console.log(str)


//* number
let num1:number;
num=12;
console.log(num)


//* boolean
let bool1:boolean = true;


//* array
let arr1:string[];
arr=["Faizan", "Siddiqui"];
console.log(arr)

let numarr:number[];
numarr = [23,34,12,56,23,4]


//* object
let obj1:{
  name:string,
  age:number
}

obj1={
name:'Faizan',
age:23
}
console.log(obj)



//* Inference

let myName = 'Ahmed'
// myName='2'

let id = 12
// id="dds"


//* function

// parameter a string
const getName = (name:string) => {
  return name
}
getName('faizan')

// parameter a number
const getId = (id:number) => {
  return id;
}

getId(232)

// return a specific type

// returning a string
const getUserName = (myNme:string):string => {
  return (`my name is ${myNme}`)
}
getUserName("faizan")

// returning a number
const getDbId = (id:number):number => {
  return id
}
getDbId(23)

// or return a boolean or any  type


//* type Aliases

type User = {
  name:string;
  id:number;
}

function createUser(user:User):User{
  return{name:"",id:3}
}

createUser({name:"faizan", id:23})

// *Union => we can define two or more data types

let id3:string | number
id3 = 23
id3="234"

