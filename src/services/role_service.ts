import { RoleRespository } from "../repositories/role_repository";
import { buildResponse, sendError } from "../utilities/utilities";

export class RoleService {
  roleRepo = new RoleRespository();

  async getAllRoles(schoolId: string) {
    const results: any = await this.roleRepo.getAllRoles(schoolId);
    if (results.length > 0)
      return buildResponse(results, false, "Fetched Roles Successfully");
    else return buildResponse(results, true, "No Roles Found");
  }

  async getRoleById(id: string) {
    const results = await this.roleRepo.getRoleById(id);
    if (results)
      return buildResponse([results], false, "Fetched Role Successfully");
    else return buildResponse([], true, "No Role Found With Given Id");
  }

  async createRole(roleData: any) {
    return await this.roleRepo.createRole(roleData);
    
  }

  async updateRole(body: any) {
    const results: any = await this.roleRepo.updateRole(body);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Updated Role Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Role"
        );
    }
  }

  async deleteRoleById(id: number) {
    const results: any = await this.roleRepo.deleteRoleById(id);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Deleted Role Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Role"
        );
    }
  }
}
