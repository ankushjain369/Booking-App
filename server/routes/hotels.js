import express from 'express';
import { createHotel, getAllHotels, getHotel, deleteHotel, updateHotel, countByCity, countByType } from '../controllers/hotelController.js';
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router();

//Create
router.post("/",verifyAdmin,createHotel)

//Update
router.put("/:id",verifyAdmin,updateHotel)

// Delete
router.delete("/:id",verifyAdmin,deleteHotel)

// Get
router.get("/find/:id",getHotel)

// Get All
router.get("/",getAllHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);


export default router