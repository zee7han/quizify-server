import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/negative';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((negative)=> {
    res.send({
      negative
    });
  });
});




export default router;
