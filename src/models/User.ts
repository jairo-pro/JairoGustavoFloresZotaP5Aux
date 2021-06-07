import {Schema, model, Document} from "mongoose";

interface IUser extends Document{
    fullName: string;
    userName: string;
    password: string;
    email: string;
    age: number;

}
const userSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
    },
});

export default model<IUser>("user", userSchema);