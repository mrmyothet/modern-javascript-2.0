let d;

d = new Date();
// d = d.toString();

// Sat Jul 10 2021 00:00:00 GMT+0630 (Myanmar Time)
d = new Date(2021, 6, 10); // 0 based index using comma format 

// Sat Jul 10 2021 06:30:00 GMT+0630 (Myanmar Time)
d = new Date('2021-07-10');

// Sat Jul 10 2021 12:30:00 GMT+0630 (Myanmar Time)
d = new Date(2021, 6, 10, 12, 30, 0);
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');

d = new Date('2022-07-10'); // if time zone is different, may be one day off using year first dash format

d = new Date('07-10-2022');

d = Date.now(); // timestampe in milli-seconds

d = new Date('07-10-2022 12:30:00');
d = d.getTime();

d = d.valueOf();

d = Date.now();
d = new Date(1682674199165);    // Fri Apr 28 2023 15:59:59 GMT+0630 (Myanmar Time)

// Timestamp in seconds 
d = Math.floor(Date.now() / 100);

console.log(d);

