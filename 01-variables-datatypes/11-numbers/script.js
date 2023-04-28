let x; 

let num = Number(5);
x = num.toString();

num = Number(50);
x = num.toString().length;   // 2

num = Number(5);
x = num.toFixed(2);     // 5.00 string 

num = 5.4527;
x = num.toPrecision(2);     // 5.5 string 
x = num.toPrecision(3);     // 5.45 string
x = num.toExponential(2);   // 5.45e+0 - exponential notation 
num = Number(5);
x = num.toLocaleString('my-MY');
x = num.toLocaleString('en-US');
x = num.valueOf();      // 5 number 

x = Number.MAX_VALUE;   // 1.7976931348623157e+308 'number'
x = Number.MIN_VALUE;   // 5e-324 'number'

console.log(x, typeof x);