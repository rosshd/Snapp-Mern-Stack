import mongoose from "mongoose";

const servSchema = mongoose.Schema(
    {
        pictures: {
            type: [Image],
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    }
)

export const Service = mongoose.model( 'service', servSchema);