const { Post } = require('../models');

const postdata = [
  {
    name: 'nikmakhija',
    starting_date: 'October 20, 2021 07:00:00',
  },
  {
    name: 'John',
    starting_date: 'October 21, 2021 07:00:00',
  },
  {
    name: 'Keley',
    starting_date: 'October 22, 2021 07:00:00',
  },
  {
    name: 'Jack',
    starting_date: 'October 23, 2020 07:00:00',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
