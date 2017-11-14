console.log('Starting notes.js');

module.exports.age=24;

module.exports.addNote = (a,b) => {
  console.log('function called');
  var c= a+b;
  return c;
}
