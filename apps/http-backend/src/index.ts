import express  from "express";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types";

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

        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.post("/signin",(req, res)=>{
    const {username, password} = req.body;

    try {
        const response = SigninSchema.parse({
            username, 
            password,
            
        })

        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.post("/createRoom",(req, res)=>{
    const {RoomName} = req.body;
    try {
        const response = CreateRoomSchema.parse({
            
            RoomName
        })

        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(3001 , ()=>{
    console.log("this backend is listning on port 3001");
    
})