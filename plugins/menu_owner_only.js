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
    
 〽️ ᴍɪᴢᴛʏ ᴏᴡɴᴇʀ ᴏɴʟʏ ᴄᴏᴍᴍᴀɴᴅꜱ 〽️   
    

 *< ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ />*

☐ _${usedPrefix}setprefix *<prefijo>*_
       
         ◯ Help - Change prefix bot


☐ _${usedPrefix}resetprefix_
      
         ◯ Help - Resetprefix to [.]
     
         
☐ _${usedPrefix}autoadmin_
       
         ◯ Help - Bot owner can use this command to get group admin [Bot admin position is required]
        
         
☐ _${usedPrefix}chetar_
      
         ◯ Help - Get unlimited coin bot 
      
         
☐ _${usedPrefix}leavegc_
       
         ◯ Help - Leave Group 
      
         
☐ _${usedPrefix}cajafuerte_
       
         ◯ Help - Bot fetures command list 
         
         
☐ _${usedPrefix}blocklist_
        
         ◯ Help - View bots blocklist 
       
         
☐ _${usedPrefix}block *<@tag / numero>*_
       
         ◯ Help - Block user 
      
         
☐ _${usedPrefix}unblock *<@tag / numero>*_
        
         ◯ Help - Unblock user 
     
         
☐ _${usedPrefix}enable *restrict*_
       
         ◯ Help - Restrict Some commands ( kick / add)
        
         
☐ _${usedPrefix}disable *restrict*_
        
         ◯ Help - Disable command Restrict
       
         
☐ _${usedPrefix}enable *autoread*_
      
         ◯ Help - Bot read all message's 
      
         
☐ _${usedPrefix}disable *autoread*_
        
         ◯ Help - Bot working without reading message's 
       
         
☐ _${usedPrefix}enable *public*_
      
         ◯ Help - Public mode activate ( Now bot working with all users )
       
         
☐ _${usedPrefix}disable *public*_
       
         ◯ Help - Public mode disactivated ( Now bot working with only owner )
      
         
☐ _${usedPrefix}enable *pconly*_
        
         ◯ Help - Bot working only privet chat's
        
         
☐ _${usedPrefix}disable *pconly*_
       
         ◯ Help - Bot working Privet chat & groups 
      
         
☐ _${usedPrefix}enable *gconly*_
       
         ◯ Help - Bot Only working group chat's 
       
         
☐ _${usedPrefix}disable *gconly*_
       
         ◯ Help - Bot working with all chat's 
     
         
☐ _${usedPrefix}enable *anticall*_
     
         ◯ Help - Bot auto block calls 
     
        
☐ _${usedPrefix}disable *anticall*_
      
         ◯ Help - Anti call disable
       
         
☐ _${usedPrefix}enable *antiprivado*_
       
         ◯ Help - Bot block all users privet chat 
      
         
☐ _${usedPrefix}disable *antiprivado*_
      
         ◯ disable antiprivet 
    
         
☐ _${usedPrefix}enable *modejadibot*_
       
         ◯ Help - 
     
         
☐ _${usedPrefix}disable *modejadibot*_
       
         ◯ Help - 
    
         
☐ _${usedPrefix}enable *audios_bot*_
     
         ◯ Help - type .enable menu
      
         
☐ _${usedPrefix}disable *audios_bot*_
       
         ◯ Help - type .enable menu
      
         
☐ _${usedPrefix}enable *antispam*_
     
         ◯ Help - type .enable menu
       
         
☐ _${usedPrefix}disable *antispam*_
       
         ◯ Help - type .enable menu 
 
 
☐ _${usedPrefix}msg *<texto>*_
        
         ◯ Help - broadcast All group's 
     
         
☐ _${usedPrefix}banchat_
        
         ◯ Help - Ban group using bot 
     
         
☐ _${usedPrefix}unbanchat_
    
         ◯ Help - unban banned group using bot
     
         
☐ _${usedPrefix}banuser *<@tag>*_
        
         ◯ Help - Ban user using bot 
    
         
☐ _${usedPrefix}unbanuser *<@tag>*_
   
         ◯ Help - Unban banned user 
      
         
☐ _${usedPrefix}bc *<texto>*_
     
         ◯ Help - broadcast
    
         
☐ _${usedPrefix}bcchats *<texto>*_
    
         ◯ Help - broadcast
    
         
☐ _${usedPrefix}cleartpm_
      
         ◯ Help - clear bot temp
     
         
☐ _${usedPrefix}restart_
     
         ◯ Help - Restart Bot 
   
         
☐ _${usedPrefix}update_
     
         ◯ Help - Bot Update 
   
         
☐ _${usedPrefix}banlist_
     
         ◯ Help - Get Banned user list 
    
         
☐ _${usedPrefix}listcmd_
    
         ◯ Help - Get Command list 
    
         
☐ _${usedPrefix}setppbot *<responde a image>*_
    
         ◯ Help - Set profile picture to bot 
    
         
☐ _${usedPrefix}addcmd *<texto> <responder a sticker/image>*_
    
         ◯ Help - Add a new command or sticker command 
    
         
☐ _${usedPrefix}delcmd *<responder a sticker/image >*_
      
         ◯ Help - Delete added command 
    
         
☐ _${usedPrefix}saveimage
   
         ◯ Help - Save bot image to bot server 
   
         
☐ _${usedPrefix}viewimage
   
         ◯ Help - Get saved image 

    
    
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
handler.command = /^(ownermenu|owneronly|adminonly|admincommands|admincmd|ownercmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    