// const add = require('./utils');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

console.log(process.argv);

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Title: ', argv.title);
    console.log('Body: ', argv.body);
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Removing the note');
    notes.removeNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler() {
    console.log('Listing notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read the notes',
  handler() {
    console.log('Reading notes');
  }
});
// add, remove, read, list

yargs.parse();
