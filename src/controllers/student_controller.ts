import { StudentService } from "../services/student_service";
import { sendError } from "../utilities/utilities";

export class StudentController {
  student_service = new StudentService();
  getAllStudents = async (req: any, res: any) => {
        res.json(await this.student_service.getAllStudents(req.params.schoolId));
    }
  createStudent = async (req: any, res: any) => {
    const studentData: any  = req.body;
    res.json(await this.student_service.createStudent(studentData));
  };
  getStudentById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.student_service.getStudentById(id));
  };
  updateStudentById = async (req: any, res: any) => {
    const { body } = req;
    res.json(await this.student_service.updateStudent(body));
  };
  deleteStudentById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.student_service.deleteStudentById(id));
  };
}
