import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
import { getUuid } from "../utilities/utilities";
import { Student } from "./student_model";
const sequelize = DbConnection.getSequelize;

export class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: getUuid,
    },
    StudentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EducationPassed: {
      type: DataTypes.STRING,
  
    },
    BoardType: {
      type: DataTypes.STRING,

    },
    BoardStream: {
      type: DataTypes.STRING,
    
    },
    Grade: {
      type: DataTypes.STRING,

    },
    TotalMarks: {
      type: DataTypes.STRING,

    },
    Percentage: {
      type: DataTypes.STRING,
     
    },
    EventTitle: {
      type: DataTypes.STRING,
      
    },
    EventDescription: {
      type: DataTypes.STRING,
  
    },
    EventReward: {
      type: DataTypes.STRING,
     
    },
    EventDate: {
      type: DataTypes.STRING,
     
    },
    ActivityType: {
      type: DataTypes.STRING,
   
    },
    schoolId: {
      type: DataTypes.STRING,
      allowNull:false
    },
    SchoolName: {
      type: DataTypes.STRING,
    },
    SchoolAddress: {
      type: DataTypes.STRING,
    },
    StudyingSsc: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    isActive: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: 'activities'
  }
);

Activity.hasOne(Student, {
  as: 'student',
  sourceKey: "StudentId",
  foreignKey: 'id',
})





