import expres from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import fetchUser from "../middlewares/fetchUser.middleware.js";

const router = expres.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", fetchUser, updateProfile);

router.get("/check", fetchUser, checkAuth);

export default router;