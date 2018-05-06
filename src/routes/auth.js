import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password'))) {
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, process.env.JWT_SECRET);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

export default router;
