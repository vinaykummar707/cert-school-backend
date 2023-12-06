import { HospitalModel } from "../models/hospital_model";

export class HospitalRespository {
    async getAllHospitals() {
        try {
         return await HospitalModel.findAll();
        } catch (error) {
           return error
        }
    }
}