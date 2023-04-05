const express = require('express');
const router = express.Router();

const createRatingController = require('../../controllers/rating/createRatingController');
const deleteRatingController = require('../../controllers/rating/deleteRatingController');
const infoRatingController = require('../../controllers/rating/infoRatingController');
const updateRatingController = require('../../controllers/rating/updateRatingController');


router.post('/createRaing', createRatingController.createRating);
router.delete('/deleteRating/:id', deleteRatingController.deleteRating);
router.get('/infoRating', infoRatingController.infoRating);
router.put('/updateRating/:id', updateRatingController.updateRating);


module.exports = router;
