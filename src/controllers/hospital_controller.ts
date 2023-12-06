import {HospitalService} from "../services/hospital_service";

export class HospitalController {
    hospital_service = new HospitalService();
     getAllHospitals = async (req: any, res: any) => {
         res.json(await this.hospital_service.getAllHospitals());
    }
}


