//var obj = {

//var stringObj = JSON.stringify(obj);

//console.log(typeof(stringObj));
//console.log(stringObj);

//var personString = '{"name":"abhilash","age":24}';
//var strg = JSON.parse(personString);

//console.log(typeof strg);
//console.log(strg);


var obj = {name:'abhilash',
            age: 24};

const fs = require('fs');

var newstr = JSON.stringify(obj);

fs.writeFileSync('new.json',newstr);

var retstr = fs.readFileSync('new.json');

var strstr = JSON.parse(retstr);

console.log(typeof strstr);
console.log(strstr);
