import expres from "express";
import fetchUser from "../middlewares/fetchUser.middleware.js";
import { getMessages, getUserForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = expres.Router();

router.get("/users", fetchUser, getUserForSidebar);

router.get("/:id", fetchUser, getMessages);

router.post("/send/:id", fetchUser, sendMessage);

export default router;