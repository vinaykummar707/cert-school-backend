import { StudentRespository } from "../repositories/student_repository";
import { buildResponse, sendError } from "../utilities/utilities";

export class StudentService {
  studentRepo = new StudentRespository();

  async getAllStudents(schoolId: string) {
    const results: any = await this.studentRepo.getAllStudents(schoolId);
    if (results.length > 0)
      return buildResponse(results, false, "Fetched Students Successfully");
    else return buildResponse(results, true, "No Students Found");
  }

  async getStudentById(id: string) {
    const results = await this.studentRepo.getStudentById(id);
    if (results)
      return buildResponse([results], false, "Fetched Student Successfully");
    else return buildResponse([], true, "No Student Found With Given Id");
  }

  async createStudent(studentData: any) {
    return await this.studentRepo.createStudent(studentData);
    
  }

  async updateStudent(body: any) {
    const results: any = await this.studentRepo.updateStudent(body);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Updated Student Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Student"
        );
    }
  }

  async deleteStudentById(id: number) {
    const results: any = await this.studentRepo.deleteStudentById(id);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Deleted Student Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Student"
        );
    }
  }
}
