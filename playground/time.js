var moment = require('moment');

// Jan 1st 1970 00:00:00 am

/*
var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
*/

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
console.log(date.format('k:mm a'));
