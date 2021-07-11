/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(
    {
      schema: 'notesapp',
      name: 'authentications',
    },
    {
      token: {
        type: 'TEXT',
        notNull: true,
      },
    },
  );
};

exports.down = (pgm) => {
  pgm.dropTable(
    {
      schema: 'notesapp',
      name: 'authentications',
    },
  );
};
