import {Router} from "express";
import {HospitalController} from "../controllers/hospital_controller";

export const hospital_router = Router();
const hospital_controller = new HospitalController();

hospital_router.get('/', hospital_controller.getAllHospitals);

