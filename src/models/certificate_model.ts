import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
import { getUuid } from "../utilities/utilities";
import { Student } from "./student_model";
import { Activity } from "./Activity_model";
import { User } from "./user_model";
const sequelize = DbConnection.getSequelize;

export class Certificate extends Model{};

Certificate.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: getUuid,
    },
    schoolId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activityId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    sequelize, tableName: 'certificates'
});



Certificate.hasOne(Student, {
    as: 'student',
    sourceKey: "studentId",
    foreignKey: 'id',
})

Certificate.hasOne(Activity, {
    as: 'activity',
    sourceKey: "activityId",
    foreignKey: 'id',
})

Certificate.hasOne(User, {
    as: 'user',
    sourceKey: "userId",
    foreignKey: 'id',
})