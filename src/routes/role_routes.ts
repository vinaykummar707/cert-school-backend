import { Router } from "express";
import { RoleController } from "../controllers/role_controller";

export const roleRouter = Router();
const roleController = new RoleController();

roleRouter.get("/all/:schoolId", roleController.getAllRoles);
roleRouter.post("/create", roleController.createRole);
roleRouter.get("/:id", roleController.getRoleById);
roleRouter.delete("/delete/:id", roleController.deleteRoleById);
roleRouter.put("/update", roleController.updateRoleById);
