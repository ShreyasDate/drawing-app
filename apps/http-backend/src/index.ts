import express  from "express";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/zod-schema";

const app = express();

app.use(express.json())

app.post("/signup",(req, res)=>{
    const {username, password, name} = req.body;

    try {
        const response = CreateUserSchema.parse({
            username, 
            password,
            name
        })

        res.json(response);
        
    } catch (error) {
        res.json(error);
        
    }
})

app.post("/signin",(req, res)=>{
    const {username, password} = req.body;

    try {
        const response = SigninSchema.parse({
            username, 
            password,
            
        })

        res.json(response);
        
    } catch (error) {
        res.json(error);
        
    }
})

app.post("/createRoom",(req, res)=>{
    const {RoomName} = req.body;
    try {
        const response = CreateRoomSchema.parse({
            
            RoomName
        })

        res.json(response);
        
    } catch (error) {
        res.json(error);
        
    }
})

app.listen(3001 , ()=>{
    console.log("this backend is listning on port 3001");
    
})