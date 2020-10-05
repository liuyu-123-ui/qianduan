var john = [89,120,103];
var sum=0;
for(var i = 0; i < john.length; i++){
    sum += john[i];
}
var mean1  = sum / john.length;
console.log("john:",mean1);

var mike = [116,94,123];
var sum=0;
for(var i = 0; i < mike.length; i++){
    sum += mike[i];
}
var mean2  = sum / mike.length;
console.log("mike:",mean2);

var mark = [97,134,105];
var sum=0;
for(var i = 0; i < mark.length; i++){
    sum += mark[i];
}
var mean3  = sum / mark.length;
console.log("mark:",mean3);

if(mean1 > mean2){
    console.log("john获胜");
}else{
    console.log("mike获胜");
}

if(mean2 > mean3){
    console.log("mike获胜");
}else{
    console.log("mary获胜");
}

 
 
 
