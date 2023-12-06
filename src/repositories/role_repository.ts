import { Role } from "../models/role_model";
import { Activity } from "../models/Activity_model";

export class RoleRespository {
  async getAllRoles(schoolId: string): Promise<any> {
    try {
      return await Role.findAll({
        where: {isActive: true, schoolId: schoolId},
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      return error;
    }
  }

  async getRoleById(id: string) {
    try {
      return await Role.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async createRole(roleData: any) {
    try {
      return await Role.create(roleData);
    } catch (error) {
      return error;
    }
  }

  async updateRole(body: any) {
    try {
      return await Role.update(body, {
        where: {
          id: body.id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteRoleById(id: number) {
    try {
      return await Role.update(
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
