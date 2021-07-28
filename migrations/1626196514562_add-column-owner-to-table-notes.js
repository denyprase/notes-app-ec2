/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn(
    {
      schema: 'notesapp',
      name: 'notes',
    },
    {
      owner: {
        type: 'VARCHAR(50)',
      },
    });
};

exports.down = (pgm) => {
  pgm.dropColumn(
    {
      schema: 'notesapp',
      name: 'notes',
    }, 
    'owner'
  );
};
