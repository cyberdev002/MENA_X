import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'en';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
〽️ ᴍɪᴢᴛʏ ᴄᴏɴᴛʀᴏʟ ᴍᴇɴᴜ 〽️    
    

☐ *< ACTIVATE OR DEACTIVATE />*

 □  _${usedPrefix}enable *welcome*_
 
           ◯ Help - Group welcome enable 
           
           
 □  _${usedPrefix}disable *welcome*_
 
           ◯ Help - Group welcome disable 
           
           
 □  _${usedPrefix}enable *modohorny*_
 
           ◯ Help - 18+ Mode activate bot
           
           
 □  _${usedPrefix}disable *modohorny*_
 
           ◯ Help - 18+ Mode disable bot
           
           
 □  _${usedPrefix}enable *antilink*_
 
           ◯ Help - Antilink mode activate bot ( Only Admins can sent whatsapp group links )
           
           
 □  _${usedPrefix}disable *antilink*_
 
           ◯ Help - Antilink mode deactivate bot (All members can sent whatsapp group links )
           
           
 □  _${usedPrefix}enable *antilink2*_
 
           ◯ Help - Antilink mode activate bot ( Only Admins can sent whatsapp group links )
           
           
 □  _${usedPrefix}disable *antilink2*_
 
           ◯ Help - Antilink mode deactivate bot (All members can sent whatsapp group links )
           
           
 □  _${usedPrefix}enable *detect*_
 
           ◯ Help - Type .enable from  
           
           
 □  _${usedPrefix}disable *detect*_
       
           ◯ Help - Type .enable from
           
           
 □  _${usedPrefix}enable *audios*_
        
           ◯ Help - Activates audio commands without prefixes, in the group
         
           
 □  _${usedPrefix}disable *audios*_
          
           ◯ Help - deactivates audio commands without prefixes, in the group
 
 
 □  _${usedPrefix}enable *autosticker*_
      
           ◯ Help - Enable  All images or videos sent in the group become stickers
       
           
 □  _${usedPrefix}disable *autosticker*_
        
           ◯ Help - Disable All images or videos sent in the group become stickers 
       
           
 □  _${usedPrefix}enable *antiviewonce*_
       
           ◯ Help - Images sent to be viewed only once are resent normally by the Bot
       
           
 □  _${usedPrefix}disable *antiviewonce*_
       
           ◯ Help - Disable Images sent to be viewed only once are resent normally by the Bot
       
           
 □  _${usedPrefix}enable *antitoxic*_
        
          ◯ Help - Detects bad words and warns the group participant before being eliminated 
        
          
 □  _${usedPrefix}disable *antitoxic*_
        
          ◯ Help - Disable Detects bad words and warns the group participant before being eliminated
          
          
 □  _${usedPrefix}enable *antitraba*_
          
          ◯ Help - If an Arabic number joins the group, the Bot automatically deletes it
       
          
 □  _${usedPrefix}disable *antitraba*_
         
          ◯ Help - Disable If an Arabic number joins the group, the Bot automatically deletes it 
       
          
 □  _${usedPrefix}enable *modoadmin*_
          
          ◯ Help - The Bot will only respond to the group's admins 
        
          
 ☐  _${usedPrefix}disable *modoadmin*_
        
          ◯ Help - The Bot will respond to the group's all members 
        
          
 □  _${usedPrefix}enable *antidelete*_
        
          ◯ Help - The Bot detects when a user deletes a message and resends it 
       
          
 □  _${usedPrefix}disable *antidelete*_
      
          ◯ Help - Disable The Bot detects when a user deletes a message and resends it
 
 
 *_SIMPLE IS BEAUTY 🌙_*

`
    
    
    
    
    
    .trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] MINIMUM 10 CARACTORS*', m);
  }
};
handler.command = /^(menucontrol|botcontrol|control|controlcmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    