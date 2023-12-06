import { Student } from "../models/student_model";
import { Activity } from "../models/Activity_model";

export class StudentRespository {
  async getAllStudents(schoolId: string): Promise<any> {
    try {
      return await Student.findAll({
        where: {isActive: true, SchoolId: schoolId},
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      return error;
    }
  }

  async getStudentById(id: string) {
    try {
      return await Student.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async createStudent(studentData: any) {
    try {
      console.log(studentData);
      
      return await Student.create(studentData);
    } catch (error) {
      return error;
    }
  }

  async updateStudent(body: any) {
    try {
      return await Student.update(body, {
        where: {
          id: body.id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteStudentById(id: number) {
    try {
      return await Student.update(
        {
          isActive: false
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
