console.log('starting app');

const ps= require('os');

var abhi= ps.userInfo();

const fs = require('fs');

const notes = require('./notes.js');

var abhi2= notes.addNote(5,6);

//fs.appendFileSync('sample.txt',' The sum is  is '+ abhi2);
fs.appendFileSync('sample.txt',`hello, ${abhi.username}`);
