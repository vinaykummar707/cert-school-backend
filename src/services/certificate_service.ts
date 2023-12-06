import { CertificateRespository } from "../repositories/certificate_repository";
import { buildResponse, sendError } from "../utilities/utilities";

export class CertificateService {
  certificateRepo = new CertificateRespository();

  async getAllCertificates(schoolId: string) {
    const results: any = await this.certificateRepo.getAllCertificates(schoolId);
    if (results.length > 0)
      return buildResponse(results, false, "Fetched Certificates Successfully");
    else return buildResponse(results, true, "No Certificates Found");
  }

  async getCertificateById(id: string) {
    const results = await this.certificateRepo.getCertificateById(id);
    if (results)
      return buildResponse([results], false, "Fetched Certificate Successfully");
    else return buildResponse([], true, "No Certificate Found With Given Id");
  }

  async createCertificate(certificateData: any) {
    return await this.certificateRepo.createCertificate(certificateData);
    
  }

  async updateCertificate(body: any) {
    const results: any = await this.certificateRepo.updateCertificate(body);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Updated Certificate Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Certificate"
        );
    }
  }

  async deleteCertificateById(id: number) {
    const results: any = await this.certificateRepo.deleteCertificateById(id);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Deleted Certificate Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Certificate"
        );
    }
  }
}
