let x; 

let d = new Date();

x = d.toString();
x = d.valueOf();

d = new Date('2020/10/12 12:30:30:15');
x = d.getFullYear();    // 2020
x = d.getMonth();       // 9 - month is 0 based 
x = d.getMonth() + 1;   // 10
x = d.getDate();        // 12
x = d.getDay();         // 1
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();    // 15

x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;  // 2020-10-12

x = Intl.DateTimeFormat('en-US').format(d); // 10/12/2020
x = Intl.DateTimeFormat('en-GB').format(d); // 12/10/2020
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);  // October
x = Intl.DateTimeFormat('default', {month: 'short'}).format(d); // Oct

x = d.toLocaleString('default', {month: 'short'});  // Oct

d = new Date();
x = d.toLocaleString('default', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    // timeZone: 'America/New_York'
    timeZone: 'Asia/Yangon',
})

console.log(x);