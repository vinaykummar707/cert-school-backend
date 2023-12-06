import {Sequelize} from 'sequelize';

export class DbConnection {
    private static sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'nephbuddy-dev.cgj2xti8wnfl.ap-south-1.rds.amazonaws.com',
        database: 'nephbuddy_dev',
        port: 5432,
        username: 'nephadmin',
        password: 'Playstation4',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    });

    static get getSequelize(): Sequelize {
        return this.sequelize;
    }

    async connectToDatabase() {
        try {
            await DbConnection.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw new Error();
        }
    }
}

