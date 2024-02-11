import mongoose from 'mongoose'

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        stream: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
    );

    export const Student = mongoose.model('Student', studentSchema);

