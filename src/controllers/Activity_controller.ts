import { ActivityService } from "../services/activity_service";
import { sendError } from "../utilities/utilities";

export class ActivitysController {
    activityService = new ActivityService();
    getAllActivitys = async (req: any, res: any) => {
          res.json(await this.activityService.getAllActivitys(req.params.activityType, req.params.schoolId));
        }
  
    getAllActiveActivitys = async (req: any, res: any) => {
      res.json(await this.activityService.getAllActiveActivitys());
    };
    getAllActiveActivitysByOwnerId = async (req: any, res: any) => {
        res.json(await this.activityService.getAllActiveActivitysByOwnerId(req.body));
      };
    createActivity = async (req: any, res: any) => {
      const ActivityData  = req.file;
      res.json(await this.activityService.createActivity(req.body));
    };
    getActivityById = async (req: any, res: any) => {
      const id = req.params.id;
      res.json(await this.activityService.getActivityById(id));
    };
    updateActivityById = async (req: any, res: any) => {
      const { body } = req;
      res.json(await this.activityService.updateActivity(body));
    };
    deleteActivityById = async (req: any, res: any) => {
      const id = req.params.id;
      res.json(await this.activityService.deleteActivityById(id));
    };
  }