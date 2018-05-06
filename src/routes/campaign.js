import express from 'express';
import fs from 'fs';
import path from 'path';

import authenticate from '../middlewares/authenticate';
import Campaign from '../models/campaign';



let router = express.Router();



router.post('/', authenticate, (req, res) => {
  let image = req.files['image'][0];
  let tempPath = ("upload_files/images/" + req.body.campaign_name  +  "_" + req.body.channel_name + "." + image.mimetype.split("/").pop()).replace(/ /g, "_");
  let filepath = path.join(__dirname, '../../../gamification-client/src/');
  let newfilepath = filepath + tempPath;

  const campaign_name = req.body.campaign_name,
        channel_name = req.body.channel_name,
        category = req.body.category,
        details = req.body.details,
        status = req.body.status,
        imgUrl = tempPath;
  console.log("Try to print the new file path", newfilepath);


  if (!fs.existsSync(newfilepath)) {
  fs.createReadStream(image.path).pipe(fs.createWriteStream(newfilepath));
  Campaign.forge({campaign_name, channel_name, category, details, status, imgUrl})
  .save()
  .then((campaign)=>{
    console.log("Send the success response");
    res.status(200).json({
      success: true
    });
  })
  .catch(err => res.status(500).json({
    error: err
  }));
} else {
  Campaign.forge({campaign_name, channel_name, category, details, status, imgUrl})
  .save()
  .then((campaign)=>{
    console.log("Send the success response");
    res.status(200).json({
      success: true
    });
  })
  .catch(err => res.status(500).json({
    error: err
  }));
}
});




router.get('/:page', authenticate, (req, res) => {
  if( req.query.filter !== undefined){
        Campaign.query({where:{ status: req.query.filter}}).fetchPage({page: req.params.page, pageSize: 4}).then(campaigns => {
          res.send({
            campaigns
          });
        });

  } else {
    Campaign.query({}).fetchPage({page: req.params.page, pageSize: 4}).then(campaigns => {
      res.send({
        campaigns
      });
    });
  }
});








export default router;
