import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
import { getUuid } from "../utilities/utilities";
import { Activity } from "./Activity_model";
const sequelize = DbConnection.getSequelize;

export class Student extends Model {
}

Student.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: getUuid,
    },
    StudentName: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    FatherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FamilyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SchoolId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GraduationDate:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: 'students'
  }
);

