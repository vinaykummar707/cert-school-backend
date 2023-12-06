import {Router} from "express";
import { studentRouter } from "./student_routes";
import { activityRouter } from "./activity_routes";
import { roleRouter } from "./role_routes";
import { userRouter } from "./user_routes";
import { certificateRouter } from "./certificates_routes";
export const router = Router();



router.use('/student', studentRouter);
router.use('/activity', activityRouter);
router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('/certificate', certificateRouter);