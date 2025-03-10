import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
            unique: true,
        },
        tags: {
            type: Array,
            default: [],
        },
        viewsCount: {
            type: Number,
            default: 0
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        imageUrl: String,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('post', postSchema)