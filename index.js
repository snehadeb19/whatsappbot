const qrcode = require('qrcode-terminal');
const {Client, LocalAuth} = require('whatsapp-web.js');

const whatsapp = new Client({
    authStrategy:new LocalAuth()
})
whatsapp.on('qr',qr => {
    qrcode.generate(qr,{
        small:true
    })
})
whatsapp.on('message',async message =>{
    if(message.body === "Assignment"){
        message.reply("Hey everyone! Just a friendly reminder about our upcoming assignment.....")}
})
whatsapp.on('ready',() => {
    console.log("client is ready")
})
whatsapp.initialize()