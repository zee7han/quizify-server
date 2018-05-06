import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/type';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((types)=> {
    res.send({
      types
    });
  });
});




export default router;
