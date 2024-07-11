import mongoose from "mongoose";

const serveContent = mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true,
        }
    }
)

export const Service = mongoose.model( 'service', serveContent);