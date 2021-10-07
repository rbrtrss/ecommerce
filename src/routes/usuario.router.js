import { Router } from 'express';
import passport from '../middlewares/auth';

const router = Router();

router.post('/login', passport.authenticate('login'), (req, res) => {
  res.json({ msg: 'Welcome!', user: req.user });
});

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ data: info });
    }
  });
});

export default router;
