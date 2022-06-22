
const path  = require('path')




const getClient =(req , res)=>{
    
    res.sendFile(path.join(__dirname + '/public/index.html'))

}

module.exports = getClient;