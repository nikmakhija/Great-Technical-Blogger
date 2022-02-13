const router = require('express').Router();
const { Post, Comment, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: Comment,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const post = dbpostData.map((gallery) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'username',
              'email',
              'date of comment',
              'filename',
              'description',
            ],
          },
        ],
      });
  
      const post = dbPostData.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  router.get('/comment/:id', withAuth, async (req, res) => {
    try {
      const dbCommentData = await Comment.findByPk(req.params.id);
  
      const comment = dbCommentData.get({ plain: true });
  
      res.render('comment', { painting, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  