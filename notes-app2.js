console.log('starting notes-app2');

const fs = require('fs');

var fetchNote=()=>{
  try{
    var notesString =fs.readFileSync('notes-app.json');
    return JSON.parse(notesString);
  }
  catch(e){
    return [];
  }
};

var saveNote=(note)=>{
  fs.writeFileSync('notes-app.json',JSON.stringify(note));
};

addNote= (title,body)=>{
  var note = fetchNote();
  var notes = {
    title,
    body
  };

  var duplicateNotes = note.filter((notes)=>notes.title===title);
  if (duplicateNotes.length===0){
  note.push(notes);
  saveNote(note);
   return notes;
}
};

var getAll = (title)=>{
return fetchNote();
};

getNote = ()=>{
var stringNotes = fetchNote();
var filteredNotes = stringNotes.filter((note)=>note.title===title);
return filteredNotes[0];
};

removeNote = (title)=>{
var stringNotes = fetchNote();
var filteredNotes= stringNotes.filter((note)=> note.title!==title);
saveNote(filteredNotes);
return stringNotes.length!==filteredNotes.length;
};

logNote = (notes)=>{
  debugger;
  console.log(`title:${notes.title}`);
  console.log(`body:${notes.body}`);
}

module.exports= {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
