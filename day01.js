//计算y并输出
var y = null;
var x =5;
if(x < 1){
    y = x;
}else if(x >= 1 && x < 10){
    y = 2 * x + 1;
}else{
    y = 5 * x - 17
}
console.log(y);

//成绩判定
var zj =91;
if(zj > 85){
    console.log("优秀");
    if(zj >95 && zj <= 100){
        console.log("1000");
    }else if(zj >90 && zj <= 95){
        console.log("800");
    }else{
        console.log("300");
    }
}else if(zj >=75 && zj <= 85){
    console.log("良好");
}else if(zj >=60 && zj <= 75){
    console.log("及格");
}else{
    console.log("不及格");
}


//打印三角形
for(var i = 0; i < 5; i++){
    for(var j = 0; j <= i; j++){
        document.write("*")
    }
    document.write("<br />")
}


console.log('hello word')
var strName = 'ly';//不用

let strName = 'ly';

const isHuman = 'true';//定义不能改变

let a = 10;
console.log(typeof typeof a);//一个typeof输出number 两个typeof输出string

let e = null;
console.log(e == undefined);//===:绝对等于

const strName = 'ly';

const strName2 = "ly";

const strName3 = 'l\'y';

let a1 ='l'
let a2 ='lt'
let a3 ='ly'
const strName4 = `
<h1>
    <p>${a1}</p>
    <p>${a2}</p>
    <p>${a3}</p>
</h1>
`
console.log(strName4)

const oStudent = {
    name:'fs'
}
console.log('name' in oStudent);



const oArray = [2,3,4,5];
console.log(2 in oArray);

const oArray = new Array();
console.log(oArray instanceof Array);






console.log('hello World!');

let a = 1;


console.log('hello World!');   // 输出 'hello world!'

// 这是一个单行注释

/*
 *   @author: xiaojichao
 *   @usage: 调用方法。。。。。
 */

var strStudentName = 'xiaojichao'
strStudentName = 1
console.log(strStudentName)

let strName = 'xiao', strLastName = 'ji', nAge = 20
strName = 2
console.log(strName)

const isHuman = true

console.log(typeof isHuman, typeof typeof isHuman) 

let age = 20
console.log(typeof age)

let money1 = 0.1
let money2 = 0.2
let money3 = money1 + money2
console.log(money3.toPrecision(1))

let a = undefined
console.log(a)


let oStudent = null
console.log(typeof oStudent)

console.log(null == undefined)


let a = 'xiaojichao1'

let b = 'He\'s a teacher!'

console.log(typeof a, typeof b)

let a = "xiaojichao"
let b = "huyike"

let c = 
`
<header>${a}</header>
<div>${b}</div>
`

console.log(c)

const b = Symbol();
console.log(typeof b)


let a = (1,2,3,3,5)
console.log(a);

a = 1;
b = 1;

console.log(a == b)
console.log(undefined === null)

let age = 20

let a = (age >= 30? 'older':"youth")
console.log(a)


const oStudent = {
    name: 'xiaojichao',
    age: 49
}

console.log('name' in oStudent);

delete oStudent.name
console.log('name' in oStudent);


const oStu = [1,2,3,4];
console.log(2 in oStu) 

const oStu = new  Array()

console.log(oStu instanceof Function);


const number = 20;
if (number === 20) {
  return '这个数字是 20!';
} else {
  return '这个数字不是 20!'
}

const number = 20
if (number < 10) {
  return '这个数字小于 10';
} else if (number >= 10 && number < 20) {
  return '这个数字大于等于10，但是小于20！';
} else if (number >= 20 && number < 50) {
  return '这个数字大于等于20，但是小于50！';
} else {
  return '我放弃了！我所知道的是它不小于50！';
}


const age = 20;
switch(age) {
  case 20:
    return '你20岁！';
    break;
  case 21:
    return '你21岁';
    break;
  default:
    return '你既不是20岁，也不是21岁';
}