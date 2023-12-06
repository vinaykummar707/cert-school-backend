import {Router} from 'express';
import { ActivitysController } from '../controllers/Activity_controller';
import multer from 'multer';
import { multerInit } from '../utilities/utilities';
export const activityRouter = Router();
const activityController = new ActivitysController();
const upload = multerInit();


activityRouter.get("/all/:activityType/:schoolId", activityController.getAllActivitys);
activityRouter.post("/create", activityController.createActivity);
activityRouter.get("/:id", activityController.getActivityById);
activityRouter.delete("/delete/:id", activityController.deleteActivityById);
activityRouter.put("/update", activityController.updateActivityById);