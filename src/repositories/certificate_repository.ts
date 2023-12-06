import { Certificate } from "../models/certificate_model";
import { Activity } from "../models/Activity_model";
import { Student } from "../models/student_model";
import { User } from "../models/user_model";

export class CertificateRespository {
  async getAllCertificates(schoolId: string): Promise<any> {
    try {
      return await Certificate.findAll({
        where: { isActive: true, schoolId: schoolId },
        order: [["createdAt", "DESC"]],
        include: [
          { model: Activity, as: "activity" },
          { model: Student, as: "student" },
          { model: User, as: "user" },
        ],
      });
    } catch (error) {
      return error;
    }
  }

  async getCertificateById(id: string) {
    try {
      return await Certificate.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async createCertificate(certificateData: any) {
    try {
      return await Certificate.create(certificateData);
    } catch (error) {
      return error;
    }
  }

  async updateCertificate(body: any) {
    try {
      return await Certificate.update(body, {
        where: {
          id: body.id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteCertificateById(id: number) {
    try {
      return await Certificate.update(
        {
          isActive: false,
        },
        {
          where: {
            id: id,
          },
        }
      );
    } catch (error) {
      return error;
    }
  }
}
