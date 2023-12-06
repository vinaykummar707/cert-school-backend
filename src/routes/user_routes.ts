import { Router } from "express";
import { UserController } from "../controllers/user_controller";

export const userRouter = Router();
const userController = new UserController();

userRouter.get("/all/:schoolId", userController.getAllUsers);
userRouter.post("/create", userController.createUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/:id", userController.getUserById);
userRouter.delete("/delete/:id", userController.deleteUserById);
userRouter.put("/update", userController.updateUserById);
