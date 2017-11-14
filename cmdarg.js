

//fs.appendFileSync('sample.txt',' The sum is  is '+ abhi2);
//fs.appendFileSync('sample.txt','hello' ${abhi.username});
var cmd = process.argv[2];

const yargs= require('yargs');

const rand = require('./rand');
var argv= yargs.argv;

console.log('process',process.argv);
console.log('yargs',argv);
console.log('command', cmd);
//if (cmd == 'add'){
  //console.log('adding new notes');
//}
//else if(cmd=='sub'){
  //console.log('subtracting the notes');
//}
if(cmd==='add')
{
  rand.addNote(argv.title,argv.body);
}
