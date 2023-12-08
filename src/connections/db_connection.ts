import { Sequelize } from "sequelize";

export class DbConnection {
  private static sequelize = new Sequelize({
    dialect: "mssql",
    host: "adarsh-cert-sql-server.database.windows.net",
    database: "certschool",
    port: 1433,
    username: "certschool",
    password: "14E41a0593",
    dialectOptions: {
      requestTimeout: 60000,
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
