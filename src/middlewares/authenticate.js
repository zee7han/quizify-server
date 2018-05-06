import jwt from 'jsonwebtoken';


import User from '../models/user';

let JWT_SECRET = process.env.JWT_SECRET || "I_will_win_definitely";


export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  return new Promise((resolve, reject) => {

    if (authorizationHeader) {
      let token = authorizationHeader.split(' ')[1];
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
          reject(res.status(401).json({
            error: 'Failed to authenticate'
          }));
        } else {
          User.query({
            where: {
              id: decoded.id
            },
            select: ['email', 'id', 'username', 'role', 'name']
          }).fetch().then(user => {
            if (!user) {
              reject(res.status(404).json({
                error: 'No such user'
              }));
            } else {
              req.currentUser = user;
              resolve(next());
            }
          });
        }

      });
    } else {
      reject(res.status(403).json({
        error: 'No token provided'
      }));
    }
  });
}
