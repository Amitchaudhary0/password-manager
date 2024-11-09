import express from "express"
import bodyParser from 'body-parser';
import cors from "cors";
import {passDB} from "./models/PassManagSchema.js"


const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(cors());

app.get('/', async(req, res) => {
    let data = await passDB.find({})
  res.send(data)
})

app.post('/',(req, res) => {
    let postData = req.body;
    passDB.create(postData)
    res.send("success: Posted");
})

app.delete('/', async(req, res) => {
    await passDB.deleteMany({});
    res.send("success: Deleted All Posts");
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
