
import { envs } from "./config/plugins/envs.plugin";
import { prisma } from "./config/plugins/prisma.plugin";
import { MongoDatabase } from "./data/mongo";
import { LogSeverityLevel } from "./domain/entities/log.entity";
import { Server } from "./presentation/server";
import 'dotenv/config';


(async () => {
    main();
})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'LOW',
    //         message: 'Test message 6',
    //         origin: 'app.ts'
    //     }
    // });
    // console.log({ newLog });

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: LogSeverityLevel.low.toString().toUpperCase()
    //     }
    // });
    // console.log(logs)

    Server.start();
}