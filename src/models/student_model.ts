import { DataTypes, Model } from 'sequelize';
import { DbConnection } from '../connections/db_connection';
import { getUuid } from '../utilities/utilities';
import { Activity } from './Activity_model';
const sequelize = DbConnection.getSequelize;

export class Student extends Model {}

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
		},
		Address: {
			type: DataTypes.STRING,
		},
		City: {
			type: DataTypes.STRING,
		},
		State: {
			type: DataTypes.STRING,
		},
		SchoolId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		verified: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		isActive: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
		},
	},
	{
		sequelize,
		timestamps: true,
		tableName: 'students',
	}
);
