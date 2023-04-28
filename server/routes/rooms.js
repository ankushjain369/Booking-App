import express from 'express';
import { createRoom, getAllRooms, getRoom, deleteRoom, updateRoom } from '../controllers/RoomController.js';
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router();

//Create
router.post("/:hotelid",verifyAdmin,createRoom)

//Update
router.put("/:id",verifyAdmin,updateRoom)

// Delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

// Get
router.get("/:id",getRoom)

// Get All
router.get("/",getAllRooms)

export default router