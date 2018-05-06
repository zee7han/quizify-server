import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/weightage';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((weightages)=> {
    res.send({
      weightages
    });
  });
});




export default router;
