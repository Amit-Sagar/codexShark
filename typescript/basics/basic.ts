//* string
let userName1 = "Dave";
console.log(userName1)

let str1:string;
str1='Faizan';
console.log(str1)


//* number
let num1:number;
num1=12;
console.log(num1)


//* boolean
let bool1:boolean = true;


//* array
let arr1:string[];
arr1=["Faizan", "Siddiqui"];
console.log(arr1)

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
console.log(obj1)



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

type MyAdmin ={
  name:string;
  email:string;
  isActive:boolean
}

const iAdmin: MyAdmin={
  name:"Faizan",
  email:"abc@gmail.com",
  isActive:true,
}

type cardNumber = {
  cardNum: string
}
type cardDate ={
  carddate:string
}

type cardDetails = cardNumber & cardDate & {
  cvv:number
}

let cardUser : cardDetails = {
  cardNum:"2354656",
  carddate:"Aug 2023",
  cvv:444
}


type Animal = {
  color:string;
  name:string;  
}


type Bird = {
  species:string;
  num:number;
}

let mtPet : Animal & Bird ={
  color:'black',
  name:'Daizy',
  species:'Dog',
  num:1,
}

// *Union => we can define two or more data types

let id3:string | number
id3 = 23
id3="234"

// array of different types
let unionArr:(string | number)[];
unionArr = ["Faizan", "Siddiqui", 123]

let unionArry:(string | number | boolean)[];
unionArry = [false,'Hey',13];


// *Tuple
// restricted to order od types

let tUser:[string, number];
tUser = ["Faizan", 12]       //(✔)
// tUser = [12,"Faizan"]     (×) (order is different of types so its not possible)


let tUser1:[string, number, boolean];
tUser1 = ["Faizan", 12, true]

type newUser = [number, string]
let user1:newUser = [112,'abc@google.com']
user1[1] = "example@google.com"    //We can mutate the tuple

// we can apply array methods here like {push, pop, shift, unshift }
user1.push(12)
user1.push('hello')


// *Interface
interface mUser {
  dbId:number,
  email:string,
  userId:number,

  // method 1
  startTrail:() => string

  // method 2
  getName():number

  getCoupon(coupanName:string,value:number):string,
}


// 1) Opening of a interface
// we can add property in existing interface by writing it again
interface mUser{
  githubId:string
}

// 2) Inheritence
interface Admin extends mUser {
  role:"admin" | "ta" | "learner"
}

const faizan: mUser = {
  dbId:22,
  email:'abc@gmail.com',
  userId:2132,
  githubId:'scloijcegiw',
  startTrail:()=> {
    return "Trail started"
  },
  getName:()=> {
    return 12
  },
  getCoupon:(name:"Faizan",off:10)=> {
    return '10'
  }
}

const hitesh: Admin = {
  dbId:22,
  email:'abc@gmail.com',
  userId:2132,
  githubId:'scloijcegiw',
  role:'admin',
  startTrail:()=> {
    return "Trail started"
  },
  getName:()=> {
    return 12
  },
  getCoupon:(name:"Faizan",off:10)=> {
    return '10'
  }
}

// *class
class team {
  name:string
  email:string
  constructor(email:string,name:string){
    this.email = email;
    this.name= name
  }
}
const x = new team('f@faizan.com','Fazain')

// public, private, protected 
// by default every property and method are public
class team1 {
  name:string
  email:string
  private id:number
  constructor(email:string,name:string){
    this.email = email;
    this.name= name
  }
}
const shark = new team('f@google.com','Faizan')









