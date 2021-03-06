import express from 'express';

import authenticate from '../middlewares/authenticate';
import LoadState from '../models/load_state';


let router = express.Router();

router.get('/', authenticate, (req, res)=> {
  LoadState.query({}).fetchAll().then((states)=> {
    res.send({
      states
    });
  });
});




export default router;
