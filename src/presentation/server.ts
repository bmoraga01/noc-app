import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDataSource()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {

    public static async start() {

        console.log('Server started...');

        // todo: Mandar Email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute(
        //         // ['bastiedumoraga@gmail.com', '1230984756lauty@gmail.com']
        //         'bastiedumoraga@gmail.com'
        // )


        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {

        //         // const url = 'http://localhost:3000/posts';
        //         const url = 'https://pokeapi.co/api/v2/pokemon/1';
        //         // const url = 'https://google.com';
        //         new CheckServiceMultiple(
        //             [fsLogRepository, mongoLogRepository, postgresLogRepository],
        //             () => console.log(`${ url } is ok!`),
        //             (error) => console.log(error)
        //         ).execute(url);

        //     }
        // );


    }

}