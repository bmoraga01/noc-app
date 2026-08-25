import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
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

    // Crear un registro
    // const newLog = await LogModel.create({
    //     message: 'This is a test log message 2',
    //     origin: 'src/app.ts',
    //     level: 'low',
    // });

    // await newLog.save();
    // console.log(newLog);

    // const logs = await LogModel.find();
    // console.log(logs);

    // Server.start();
}