import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
import { getUuid } from "../utilities/utilities";
import { Role } from "./role_model";
const sequelize = DbConnection.getSequelize;

export class User extends Model{};

User.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: getUuid,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schoolId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize, tableName: 'users'
});


User.hasOne(Role, {
    as: 'role',
    sourceKey: "roleId",
    foreignKey: 'id',
})