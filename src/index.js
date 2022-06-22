//IMPORTANDO MOUDULOS DEL NPM
const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()



//SETTINGS
app.set('port' , process.env.PORT || 3000)








//LISTENIG SERVER 
async function server () {
 await   app.listen(app.get('port'), () => {
        console.log('Server on port:' , app.get('port'))
    })
}
server()