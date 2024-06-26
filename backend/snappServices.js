import mongoose from "mongoose";

const servSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        cost: {
            type: String,
            required: false,
        }
    }
)

export const Service = mongoose.model( 'service', servSchema);