import mongoose,{ Schema } from "mongoose";

const contactSchema = new Schema(
    {
        name : {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        message : {
            type: String,
            required: true,
        },
        date : {
            type: Date,
            default: Date.now,
        },
    },);

    export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);