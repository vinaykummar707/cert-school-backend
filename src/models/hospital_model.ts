import { DataTypes, Model } from "sequelize";
import { DbConnection } from "../connections/db_connection";
const sequelize = DbConnection.getSequelize;

export class HospitalModel extends Model {
    declare id: number; // this is ok! The 'declare' keyword ensures this field will not be emitted by TypeScript.
}

HospitalModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hospitalName: {
        type: DataTypes.STRING
    }
}, {
    sequelize, tableName: 'hospitals'
});
