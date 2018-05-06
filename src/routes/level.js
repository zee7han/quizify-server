import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/level';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((levels)=> {
    res.send({
      levels
    });
  });
});




export default router;
