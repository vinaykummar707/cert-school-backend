import { Sequelize } from "sequelize";

export class DbConnection {
  private static sequelize = new Sequelize({
    dialect: "postgres",
    host: "cert-school.cgj2xti8wnfl.ap-south-1.rds.amazonaws.com",
    database: "certschool",
    port: 5432,
    username: "certschool",
    password: "14E41A0593",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  static get getSequelize(): Sequelize {
    return this.sequelize;
  }

  static async connectToDatabase() {
    try {
      await DbConnection.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
