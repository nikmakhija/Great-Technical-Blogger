const { Comment } = require('../models');

const commentdata = [
  {
    post: 'Welcome to our blog',
    username: 'nikmakhija',
    post_date: 'October 20, 2021',
    post_id: 1,
    filename: 'nikmakhija',
    description:
      'Welcome to our blog',
  },
  {
    post: 'Welcome to our blog',
    username: 'John',
    post_date: 'October 21, 2021',
    post_id: 2,
    filename: 'John',
    description: 'Welcome to our blog',
  },
  {
    post: 'Welcome to our blog',
    username: 'Kelly',
    post_date: 'October 22, 2021',
    post_id: 3,
    filename: 'Kelly',
    description: 'Welcome to our blog',
  },
  {
    post: 'Welcome to our blog',
    username: 'Jack',
    post_date: 'October 23, 2021',
    post_id: 4,
    filename: 'Jack',
    description: 'Welcome to our blog',
  },
  
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
