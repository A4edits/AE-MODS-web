const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/YdcfSH6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater A4edits*
*owner number wa.me/919967413665?text=Hi%20A4%20edits.%20*

*Bot making video : soon available*

*Yt_PASSWORD:afamk*

*githublink : https://github.com/A4edits/sushilan2*

*audio commads : https://github.com/A4edits/sushilan2/tree/master/uploads*
`}) 

}));
