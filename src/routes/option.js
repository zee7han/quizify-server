import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/option';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((options)=> {
    res.send({
      options
    });
  });
});




export default router;
