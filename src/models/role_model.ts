import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
import { getUuid } from "../utilities/utilities";
const sequelize = DbConnection.getSequelize;

export class Role extends Model{};

Role.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: getUuid,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schoolId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    sequelize, tableName: 'roles'
});

