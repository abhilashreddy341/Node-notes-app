

var cmd = process.argv[2];

const yargs= require('yargs');

const notes = require('./notes-app2');

const titleOptions = {
  describe:'Title of note',
  demand: true,
  alias: 't'
};

var argv= yargs.command('add','Add a new note',{
  title:titleOptions,
  body:{
    describe:'body of of note',
    demand: true,
    alias: 'b'
  },
}).command('remove','Removes a note',{title:titleOptions}).command('list','Displays all the notes').command('read','reads a single note',{title:titleOptions},).help().argv;

console.log('process',process.argv);
console.log('yargs',argv);
console.log('command', cmd);

if(cmd==='add')
{
var note= notes.addNote(argv.title,argv.body);
if(note){
  console.log('note is created');
  notes.logNote(note);
}
else {

  console.log('note is not created');
}
}

else if(cmd=='list'){
  var list = notes.getAll();
  list.forEach((note)=>
    notes.logNote(note));
}

else if(cmd==='read'){
  var read = notes.getNote(argv.title);
  if(read){
    notes.logNote(read);
  }
  else {
    console.log('note not found');
  }

}

else if(cmd==='remove'){
var removed =  notes.removeNote(argv.title);
var message= removed?'note is removed':'note was not removed';
console.log(message);
}
