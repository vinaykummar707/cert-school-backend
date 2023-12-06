import { RoleService } from "../services/role_service";
import { sendError } from "../utilities/utilities";

export class RoleController {
  role_service = new RoleService();
  getAllRoles = async (req: any, res: any) => {
        res.json(await this.role_service.getAllRoles(req.params.schoolId));
    }
  createRole = async (req: any, res: any) => {
    const roleData: any  = req.body;
    res.json(await this.role_service.createRole(roleData));
  };
  getRoleById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.role_service.getRoleById(id));
  };
  updateRoleById = async (req: any, res: any) => {
    const { body } = req;
    res.json(await this.role_service.updateRole(body));
  };
  deleteRoleById = async (req: any, res: any) => {
    const id = req.params.id;
    res.json(await this.role_service.deleteRoleById(id));
  };
}
