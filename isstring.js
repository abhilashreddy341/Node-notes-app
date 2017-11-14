console.log('starting app');

const ps= require('os');

var abhi= ps.userInfo();

const fs = require('fs');

const notes = require('./notes.js');

var abhi2= notes.addNote(5,6);

const _ = require('lodash');

var filteredArray= _.uniq(['Abhilash','reddy',1,4,2,2,4,6,'reddy','abhilash','Abhilash']);

console.log(filteredArray);

//console.log(_.isString('true'));
