import { CertificateService } from "../services/certificate_service";
import { sendError } from "../utilities/utilities";

export class CertificateController {
  student_service = new CertificateService();
  getAllCertificates = async (req: any, res: any) => {
        res.json(await this.student_service.getAllCertificates(req.params.schoolId));
    }
  createCertificate = async (req: any, res: any) => {
    const studentData: any  = req.body;
    res.json(await this.student_service.createCertificate(studentData));
  };
  getCertificateById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.student_service.getCertificateById(id));
  };
  updateCertificateById = async (req: any, res: any) => {
    const { body } = req;
    res.json(await this.student_service.updateCertificate(body));
  };
  deleteCertificateById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.student_service.deleteCertificateById(id));
  };
}
