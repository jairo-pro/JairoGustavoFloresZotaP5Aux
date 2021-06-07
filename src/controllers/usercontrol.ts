import { Request, Response} from "express";
import User from "../models/User";
class usercontrol {
    public async index(req: Request, res: Response){
        const users = await User.find({});
        res.send(users);
    }
    public async newUser(req: Request, res: Response){
        const {fullName, userName, password, email, age} = req.body;
        const nUser = new User(req.body);
        await nUser.save();
        res.send("User resgistered");
    }
}

export const indexu = new usercontrol();