const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const uri = process.env.MONGO_DB;
try{
 mongoose.connect(uri  , {
    useNewUrlParser: true,
    useUniFiedTopology: true, 
 })
 const conectionSucceful = mongoose.connection;
 conectionSucceful.once("open", (_) => {
   console.log("The database is connected to: ???");
 });

}catch(e){
    console.error('there is a problem: ' , uri )
}