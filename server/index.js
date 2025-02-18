import express from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation} from '../validations.js'
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js"
import * as PostController from "./controllers/PostController.js"

mongoose
    .connect('mongodb+srv://eralibutabaev:erali2008@erli.inb42.mongodb.net/blog?retryWrites=true&w=majority&appName=erLI')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/me', checkAuth , UserController.getMe)

app.get('/posts', checkAuth , PostController.getAll)
app.get('/posts/:id', checkAuth , PostController.getOne)
app.post('/posts', checkAuth , PostController.create)
app.delete('/posts', checkAuth , PostController.remove)
app.patch('/posts/:id', checkAuth , PostController.update)


app.listen(4444,(err) => {
    if(err){
        return console.log(err);
    }

    console.log("http://localhost:4444");
})