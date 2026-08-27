import { prisma } from "../../config/plugins/prisma.plugin";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { SeverityLevel } from "../../generated/prisma/enums";


const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
}


export class PostgresLogDatasource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {
        
        const level = severityEnum[log.level];

        const newLog = await prisma.logModel.create({
            data: {
                ...log,
                level,
            }
        });

        console.log('Postgres Log created: ', newLog.id);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const level = severityEnum[severityLevel];

        const logs = await prisma.logModel.findMany({
            where: { level }
        });

        return logs.map( log => LogEntity.fromObject(log) );
    }



}