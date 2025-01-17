import mongoose, { Document, Schema } from "mongoose"

export interface Message extends Document {
    contnet: string
    date: Date
}

const messageSchema: Schema<Message> = new Schema({
    contnet: {
        type: String,
        required: [true, "Please enter contnet!"],
    },
    date: {
        createdAt: Date,
        default: Date.now()
    }
})

export interface User extends Document {
    userName: string
    email: string
    password: string
    verifyCode: string
    verifyCodeExpiry: Date
    isAcceptingMessage: boolean
    messages: Message[]
}

const userSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true, "Please enter name!"],
        trim: true
    }, email: {
        type: String,
        required: [true, "Please enter valid email address!"],
        trim: true,
    }, password: {
        type: String,
        required: [true, "Please enter password!"],
        trim: true
    }, verifyCode: {
        type: String,
        required: [true, "Please enter verify code!"],
    }, verifyCodeExpiry: {
        type: Date,
        required: true
    }, isAcceptingMessage: { type: Boolean, default: false }, messages: {
        type: [messageSchema],
    }
});

export const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", userSchema);
// export const MessageModel = mongoose.models.Message as mongoose.Model<Message> || mongoose.model<Message>("Message", messageSchema);
