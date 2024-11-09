import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://rpant2004:9mgbBANZwd6DSd5G@passwordmanager.nuqho.mongodb.net/passwordManager');

const passwordManager = new mongoose.Schema({
    url: String,
    userName:String,
    pass:String
  });

 export const passDB = mongoose.model('passwordManager', passwordManager);