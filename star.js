var str = "";
for(var i = 1; i <= 3; i++) {
    var blank = "",
        stars = "";
    for(var j = 0; j <= 4 - i; j++) { 
        blank += " ";
    }
    for(var k = 0; k < 2 * i - 1; k++) { 
        stars += "*";
    }
    str = str + blank + stars + "\n";
}
for(var i=4;i>0;i--){
    var blank = "",
        stars = "";
    for(var j=0;j<=4-i;j++){
        blank+=" ";
    }
    for(var k=0;k<2*i-1;k++){
        stars+="*";
    }
    str = str + blank + stars + "\n";
}
console.log(str);