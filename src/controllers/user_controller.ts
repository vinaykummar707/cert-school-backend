import { UserService } from "../services/user_service";
import { sendError } from "../utilities/utilities";

export class UserController {
  user_service = new UserService();
  getAllUsers = async (req: any, res: any) => {
        res.json(await this.user_service.getAllUsers(req.params.schoolId));
    }

    loginUser = async (req: any, res: any) => {
      res.json(await this.user_service.loginVerify(req.body));
  }
  createUser = async (req: any, res: any) => {
    const userData: any  = req.body;
    res.json(await this.user_service.createUser(userData));
  };
  getUserById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.user_service.getUserById(id));
  };
  updateUserById = async (req: any, res: any) => {
    const { body } = req;
    res.json(await this.user_service.updateUser(body));
  };
  deleteUserById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.user_service.deleteUserById(id));
  };
}
