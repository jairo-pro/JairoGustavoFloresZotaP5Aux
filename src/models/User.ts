import {Schema, model, Document} from "mongoose";

interface User extends Document{
    namefull: String,
    userName: String,
    password: String,
    email: String,
    age: Number,

}
const user = new Schema({
    namefull:{
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

export default model<User>("user", user);