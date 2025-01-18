import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // Ensure this library is installed

const videoSchema = new Schema({
    videoFile: {
        type: String, // Cloudinary URL
        required: true, // Required field
    },
    thumbnail: {
        type: String, // Cloudinary URL
        required: true, // Required field
    },
    title: {
        type: String, // Video title
        required: true, // Required field
        trim: true, // Remove extra spaces
    },
    description: {
        type: String, // Video description
        required: true, // Required field
        trim: true, // Remove extra spaces
    },
    duration: {
        type: Number, // Video duration in seconds
        required: true, // Required field
    },
    views: {
        type: Number, // Number of views
        default: 0, // Default value for new videos
    },
    isPublished: {
        type: Boolean, // Indicates if the video is published
        default: true, // Default value is `true`
    },
    owner: {
        type: Schema.Types.ObjectId, // Reference to the `User` model
        ref: "User", // Model name to link
        required: true, // Required field
    },
}, { timestamps: true }); // Adds `createdAt` and `updatedAt` fields automatically

// Add pagination plugin
videoSchema.plugin(mongooseAggregatePaginate);

// Export the model
export const Video = mongoose.model("Video", videoSchema);
