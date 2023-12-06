import {Router} from "express";
import {hospital_router} from "./hospital_routes";
export const router = Router();

router.use('/hospital', hospital_router);