let t = true;
var a;
var b;
var c;


while (t) {
 a = Number(prompt( "Введите переменную a"));
 b = Number(prompt( "Введите переменную b"));
 c = Number(prompt( "Введите переменную c"));
	console.log("a" + a);
	console.log("b" + b);
	console.log("c" + c);
if (a==a && b==b && c==c){
	t=false;
}
else {
	alert ("Попробуйте снова");
}
}
let D = b*b-4*a*c;
if (a==0 && b==0 && c!=0){
	alert ("Уравнение неверно")
}
else
if(a==0 && b==0 && c==0){
let x1 = 0;
alert ("x= " + x1);
}

else
if(a==0 && b!=0 && c==0){
let x1 = 0;
alert ("x= " + x1);
}

else
if(a==0 && b!=0 && c!=0){
let x1 = -(c/b);
alert ("x= " + x1);
}


else if (D == 0) {
	let sqrD = Math.sqrt(D);
	let x1 = ((-b)/(2*a)).toFixed(2);
	alert("x= " + x1);
}
else if (D > 0){
	let sqrD = Math.sqrt(D);
	let x1 =(((-b)+sqrD)/(2*a)).toFixed(2);
	let x2 =(((-b)-sqrD)/(2*a)).toFixed(2);
	alert("x1= " + x1 + " " + "x2= " + x2);
}
else if (D < 0) {
	console.log("a" + a);
	console.log("b" + b);
	console.log("c" + c);
	let sqrD = Math.sqrt(D*(-1));
	let x1 =((-b)/(2*a)).toFixed(2) + "+" + (sqrD/(2*a)).toFixed(2) + "i";
	let x2 =((-b)/(2*a)).toFixed(2) + "-" + (sqrD/(2*a)).toFixed(2) + "i";
	alert("x1= " + x1 + " " + "x2= " + x2);
}
