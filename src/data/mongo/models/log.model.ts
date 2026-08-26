import mongoose from "mongoose";

// export interface LogEntityOptions {
//     level: LogSeverityLevel;
//     message: string;
//     origin: string;
//     createdAt?: Date;
// }

const logSchema = new mongoose.Schema({

    message: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

export const LogModel = mongoose.model('Log', logSchema);