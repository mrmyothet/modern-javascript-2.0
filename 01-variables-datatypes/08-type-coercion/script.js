let x; 

// javascript implicitly convert to string 
x = 5 + '5'; // 55 string 

x = 5 + Number('5');    // 10 number 

x = 5 * '5';            // 25 number 

x = 5 + null;       // 5 number 

x = Number(null);   // 0 

x = Number(true);   // 1 

x = Number(false);  // 0 

x = 5 + true;       // 6 number 

x = 5 + false;      // 5 number ß

x = 5 + undefined;  // NaN number 

console.log(x, typeof x);
