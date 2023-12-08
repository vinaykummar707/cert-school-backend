import { Activity } from "../models/Activity_model";
import { Student } from "../models/student_model";

export class ActivityRespository {
  async getAllActivitys(activityType: string, schoolId: string): Promise<any> {
    
    try {
       
        return await Activity.findAll({
          where: {
            isActive: 1,
            schoolId:schoolId,
          },
          include: [
            { model: Student, as: "student", required: true },
          ],
          order: [["createdAt", "DESC"]],
        });
   

    } catch (error) {
      console.log(error);
      
      return error;
    }
  }

  async getAllActiveActivitys() {
    try {
      return await Activity.findAll({
        where: {active: true},
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      return error;
    }
  }

  async getAllActiveActivitysByOwnerId(body: any) {
    try {
      return await Activity.findAll({
        where: { active: true, ownerId: body.id },
        order: [["name", "ASC"]],
      });
    } catch (error) {
      return error;
    }
  }

  async getActivityById(id: string) {
    try {
      return await Activity.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async createActivity(activityData: any) {
    console.log(activityData);
    
    try {
      return await Activity.create(activityData);
    } catch (error) {
      return error;
    }
  }

  async updateActivity(body: any) {
    try {
      return await Activity.update(body, {
        where: {
          id: body.id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteActivityById(id: number) {
    try {
      return await Activity.update(
        {
          isActive: 0,
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
