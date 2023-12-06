import { HospitalRespository } from "../repositories/hospital_repository"

export class HospitalService {
    hospitalRepo = new HospitalRespository();

    async getAllHospitals() {
        return await this.hospitalRepo.getAllHospitals();
    }
}