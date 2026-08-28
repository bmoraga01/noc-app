import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachments[];
}

export interface Attachments {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    })

    constructor() {}

    async sendEmail( options: SendMailOptions ): Promise<boolean> {

        const { to, subject, htmlBody, attachments = [] } = options;

        try {

            const sendInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments,
            })

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'email.service.ts',
            })

            // console.log(sendInformation);

            return true;
        } catch (error) {

            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts',
            })

            return false;
        }

    }

    async sendEmailWithFileSystemLogs( to: string | string[] ) {
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Excepteur nostrud anim sint ut est eu id fugiat reprehenderit ex et ea duis fugiat. Nisi aliquip adipisicing adipisicing laboris nulla deserunt reprehenderit. Mollit dolor dolor tempor pariatur non elit exercitation. Sunt minim incididunt id duis enim ullamco cillum laborum esse. Ipsum quis magna sit veniam ad mollit cillum ipsum ipsum cillum duis. Eiusmod enim labore enim Lorem elit laboris sit cillum ut Lorem qui consectetur consectetur.</p>
            <p>Ver logs adjuntos</p>
        `;

        const attachments: Attachments[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
        ];

        return this.sendEmail({
            to, subject, htmlBody, attachments
        })
    }

}