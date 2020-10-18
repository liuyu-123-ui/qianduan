//创建对象
//
let myObject = new Object();
myObject.name = "liuyu";
myObject.age = 20;
console.log(myObject);

//
const oStudent = {};
oStudent.name = "ly";
oStudent.age = 21;

const oStudent1 = {
    name:"ly",
    age:21,
};

console.log(oStudent1.name);

console.log(typeof oStudent1);//object

//数组
const a1 = new Array();

const a2 = [];
console.log(typeof a2);//对象 object
console.log(a2[0]);

const a2 = [];
a2[0] = 'a';
a2[1] = 2;
a2[5] =true;

console.log(typeof a2);
console.log(a2 instanceof Array);

console.log(a2[2]);

const a2 = [1,2,3,'abc',true,undefined,null,a2,object];

const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a = ${a},b = ${b},c = ${c},d = ${d}`);

const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a},b=${b},c=${c},d=${d}`);

const [a,b] = ['ly',true,1,2,2,1];
console.log(`a=${a},,b=${b}`);

const avengers = ["一","二","三","四"];
avengers.pop();
console.log(avengers);
avengers.push("ly");
console.log(avengers);

const avengers = ["一","二","三","四"];
console.log(avengers.shift());
console.log(avengers);

const avengers = ["一","二","三","四"];
avengers.nushift("ly");
console.log(avengers);

const avengers = ["一","二","三","四"];
const herose = ["五","六","七","八"];
const ah = avengers.concat(herose);
console.log(avengers,herose,ah);

const avengers = ["一","二","三","四"];
const herose = ["五","六","七","八"];
const ah = [...avengers,...herose];
console.log(ah);

const avengers = ["一","二","三","四"];
const av1 = avengers.join();
const av2 = avengers.join('&');
console.log(av1);
console.log(av2);

const avengers = ["一","二","三","四"];
const av3 = avengers.slice(1,3);
console.log(avengers);
console.log(av3);

const avengers = ["一","二","三","四"];
const av4 = avengers.splice(1,2,"ly","abc");
console.log(av4);
console.log(avengers);


const number1 = [1,2,23,10,3,8,9];
const a = number1.sort();
console.log(number1);
console.log(a);

const str = ['a','b','c','1'];
const b = str.reverse();
console.log(str);

const avengers = ["一","二","三","四"];
const a = avengers.indexOf("一");
console.log(a);

const avengers = ["一","二","三","四"];
const b = avengers.includes("一");
console.log(b);


//二维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[0][1]);

const avengers = ["一","二","三","四"];
const herose = ["五","六","七","八"];
const nested = [avengers,herose];
console.log(nested);

const flat = [...avengers,...herose];
console.log(flat);


//set
const oSet = new Set;
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5);
oSet.add(5);
console.log(oSet);

const list1 = new Set([1,2,3,4]);
console.log(list1);

const list2 = new Set("hello");
console.log(list2);

const list4 = new Set().add("the").add("is").add("liu").add("yu");
console.log(list4.siae);

const oArray1 = [1,2,12,1,2,3,4,4,4,5];
const oSet1 = new Set(oArray1);
console.log(oArray1);
const oArray2 = [...oSet1];
console.log(oArray2);

//
let student = {
    name:"ly",
    age:10
};

const strong = new Set();
const weak = new WeakSet();
student = null;
console.log([...strong][0]);


// Map
const oMap = new Map()
oMap.set(1, "I")
oMap.set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
console.log(oMap)
console.log(oMap.size)
const a = oMap.get(5)
console.log(a)
oMap.set('name','xiaojichao')
const b = oMap.get('name')
console.log(oMap)
console.log(b)
console.log(oMap.has('name'))
const c = oMap.delete('name')
console.log(C)
oMap.clear()
console.log(oMap)


const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'ly',
    age: 20
};

student.name = 'ly'
student.age = 20
student = null;



//
const heroes = [];
console.log(heroes[0]);

heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '闪电侠';
heroes[5] = '水行侠';
console.log(heroes);

const mixedArray = [null, 1, [], 'two', true];
console.log(mixedArray);

const [a, b, c] = [1, 2, 3];
console.log(`a = ${a}, b = ${b}, c = ${c}`);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.length);
console.log(avengers[avengers.length-1]);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = [...avengers,...heroes];
console.log(ah);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.join();
console.log(a);
const b = avengers.join(' & ');
console.log(b);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.slice(0,3);
console.log(a);
console.log(avengers);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const b = avengers.splice(1,3,'蝙蝠侠');
console.log(b);
console.log(avengers);

const a = ['a','b','c','d'];
const b = a.reverse();
console.log(a);
console.log(b);

const c = [1, 2, 3, 4, 10, 9];
const d = c.sort();
console.log(d);
console.log(c);

const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.indexOf('钢铁侠'));

console.log(avengers.includes('美国队长'));
console.log(avengers.includes('美国队长',3));

const summer = ['Jun', 'Jul', 'Aug']; 
const winter = ['Dec', 'Jan', 'Feb']; 
const nested = [ summer, winter ]; 
console.log(nested);
const flat = [...summer, ...winter]; // 扁平化
console.log(flat);

const list = new Set();
list.add(1);
list.add(2);
list.add(3).add(4).add(5); // 链式用法
list.add(1); // 忽略重复值
console.log(list);

const shoppingSet1 = new Set().add('Apples').add('Bananas').add('Beans'); 
const shoppingArray1 = [...shoppingSet1] 
console.log(shoppingArray1);



