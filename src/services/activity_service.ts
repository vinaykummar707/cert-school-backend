import { ActivityRespository } from "../repositories/activity_repository";
import { buildResponse, sendError } from "../utilities/utilities";
import { readFile } from "fs/promises";

export class ActivityService {
  activityRepo = new ActivityRespository();

  async getAllActivitys(activityType: string, schoolId: string) {
    const results: any = await this.activityRepo.getAllActivitys(activityType,schoolId);
    const data = await readFile("./config.json",'utf-8');
    console.log(data);
    if (results.length > 0)
      return buildResponse(results, false, "Fetched Activitys Successfully");
    else return buildResponse(results, true, "No Activitys Found");
  }

  async getAllActiveActivitys() {
    const results: any = await this.activityRepo.getAllActiveActivitys();
    if (results.length > 0)
      return buildResponse(
        results,
        false,
        "Fetched All Active Activitys Successfully"
      );
    else return buildResponse(results, true, "No Active Activitys Found");
  }

  async getAllActiveActivitysByOwnerId(body: any) {
    const results: any = await this.activityRepo.getAllActiveActivitysByOwnerId(body);
    if (results.length > 0)
      return buildResponse(
        results,
        false,
        "Fetched All Owner Activitys Successfully"
      );
    else return buildResponse(results, true, "No Active Activitys Found");
  }
  

  async getActivityById(id: string) {
    const results = await this.activityRepo.getActivityById(id);
    if (results)
      return buildResponse([results], false, "Fetched Activity Successfully");
    else return buildResponse([], true, "No Activity Found With Given Id");
  }

  async createActivity(activityData: any) {
    return await this.activityRepo.createActivity(activityData);

  }

  async updateActivity(body: any) {
    const results: any = await this.activityRepo.updateActivity(body);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Updated Activity Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Activity"
        );
    }
  }

  async deleteActivityById(id: number) {
    const results: any = await this.activityRepo.deleteActivityById(id);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Deleted Activity Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find Activity"
        );
    }
  }
}
