import express from "express";
import { auth } from "../middleware/auth.js";

import { 
  getAllContacts
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", auth, getAllContacts);

export default router;