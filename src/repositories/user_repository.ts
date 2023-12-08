import { Activity } from "../models/Activity_model";
import { User } from "../models/user_model";
import { Role } from "../models/role_model";

export class UserRespository {
  async getAllUsers(schoolId: string): Promise<any> {
    try {
      return await User.findAll({
        where: {isActive: 1, schoolId: schoolId},
        order: [["createdAt", "DESC"]],
        include: 
            { model: Role, as: "role", required: true,  },
        
      });
    } catch (error) {
      return error;
    }
  }

  async getUserById(id: string) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async getUserByUsername(username: string) {
    try {
      return await User.findAll({
        where: {isActive: 1, username: username},
        include: [
            { model: Role, as: "role", required: true },
          ],
      });
    } catch (error) {
      return error;
    }
  }

  async createUser(userData: any) {
    try {
      return await User.create(userData);
    } catch (error) {
      return error;
    }
  }

  async updateUser(body: any) {
    try {
      return await User.update(body, {
        where: {
          id: body.id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteUserById(id: number) {
    try {
      return await User.update(
        {
          isActive: 0
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
