import { UserRespository } from "../repositories/user_repository";
import { buildResponse, sendError } from "../utilities/utilities";
import {readFileSync, writeFileSync } from "fs";
import { readFile } from "fs/promises";
export class UserService {
  userRepo = new UserRespository();

  async getAllUsers(schoolId: string) {
    const results: any = await this.userRepo.getAllUsers(schoolId);
    if (results.length > 0)
      return buildResponse(results, false, "Fetched Users Successfully");
    else return buildResponse(results, true, "No Users Found");
  }

  async loginVerify(body: any) {
    const results: any = await this.userRepo.getUserByUsername(body.username);
    console.log(body);
    console.log(results);
    
    if (results.length > 0) {
        if(results[0].username === body.username && results[0].password === body.password){
     
        
          return buildResponse(results, false, "Fetched Users Successfully");
        } else {
          return buildResponse(results, true, "No Users Found")
        }
    }
    else {return buildResponse(results, true, "No Users Found")};
  }



  async getUserById(id: string) {
    const results = await this.userRepo.getUserById(id);
    if (results)
      return buildResponse([results], false, "Fetched User Successfully");
    else return buildResponse([], true, "No User Found With Given Id");
  }

  async createUser(userData: any) {
    return await this.userRepo.createUser(userData);
    
  }

  async updateUser(body: any) {
    const results: any = await this.userRepo.updateUser(body);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Updated User Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find User"
        );
    }
  }

  async deleteUserById(id: number) {
    const results: any = await this.userRepo.deleteUserById(id);
    if (results.errors) {
      return sendError(results)
    }
    else {
      const [created] = results;
      if (created == 1)
        return buildResponse([], false, "Deleted User Successfully");
      else
        return buildResponse(
          [],
          true,
          "Cannot find User"
        );
    }
  }
}
