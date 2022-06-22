const path = require('path');
const Cliente = require('../models/schemaUser')


const createClient = async(req , res, next)=>{
    
 try {
  const cliente = await Cliente(req.body) 
  await cliente.save()

  res.sendFile(path.join(__dirname + '/public/agradecimiento.html'))

 }catch(e){
   
   const newLocal = next(e)
   return newLocal;

 }
  
 
}

module.exports = createClient;