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
 \`〽️ ᴍɪᴢᴛʏ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ 〽️\`
    

 *< DOWNLOAD COMMANDS />*
 
□ _${usedPrefix}instagram *< link / url>*_

           ◯ Help  - Download Instagram videos 


□ _${usedPrefix}mediafire *< link / url>*_
         
           ◯ Help - Download Mediafire files
         
           
□ _${usedPrefix}gitclone *< link / url>*_
          
           ◯ Help - Download Github repositories
       
           
□ _${usedPrefix}gdrive *< link / url>*_
        
           ◯ Help - Download Google Drive files 
       
           
□ _${usedPrefix}tiktok *< link / url>*_
         
           ◯ Help - Download TikTok videos 
      
           
□ _${usedPrefix}twitter *< link / url>*_
        
           ◯ Help - Download Twitter videos
       
           
□ _${usedPrefix}fb *< link / url>*_
          
           ◯ Help - Download Facebook videos 
       
           
□ _${usedPrefix}ytshort *< link / url>*_
         
           ◯ Help - Download Youtube Short videos 
       
           
□ _${usedPrefix}ytmp3 *< link / url>*_
        
           ◯ Help - Download Youtube Videos *Audio only*
        
           
□ _${usedPrefix}ytmp4 *< link / url>*_
          
           ◯ Help - Download Youtube videos 
        
           
□ _${usedPrefix}ytmp3doc *< link / url>*_
         
           ◯ Help - Download Youtube Audio *Doc type*
        
           
□ _${usedPrefix}ytmp4doc *< link / url>*_
          
           ◯ Help - Download Youtube videos *Doc type*
         
           
□ _${usedPrefix}videodoc *< link / url>*_
           
           ◯ Help - Download Youtube videos *Doc type*
         
           
□ _${usedPrefix}dapk2 *< link / url>*_
        
           ◯ Help - Download Android app by aptoide 
       
           
□ _${usedPrefix}stickerpack *<link / url>*_
         
           ◯ Help - Sticker Pack download 
       
           
□ _${usedPrefix}song *<text>*_
         
           ◯ Help - Download Youtube Audio by Name [ Sometimes it doesn't work ]
         
           
□ _${usedPrefix}video *<text>*_
          
           ◯ Help - Download Youtube Video by Name [ Sometimes it doesn't work ]
       
           
□ _${usedPrefix}playlist *<text>*_
        
           ◯ Help - Search & Download youtube playlist One by one  
         
           
□ _${usedPrefix}spotify *<text>*_
        
           ◯ Help - Download Song From Spotify
        
           
□ _${usedPrefix}ringtone *<text>*_
        
           ◯ Help - Ringtone Download 
        
           
□ _${usedPrefix}soundcloud *<text>*_
         
           ◯ Help - Download Song By Soundcloud 
       
           
□ _${usedPrefix}imagen *<text>*_
      
           ◯ Help - Google search  


□ _${usedPrefix}wallpaper *<text>*_
       
           ◯ Help - Download wallpaper 
       
           
□ _${usedPrefix}pptiktok *<Username>*_
       
           ◯ Help - TikTok Profile Picture download 
       
           
□ _${usedPrefix}igstalk *<Username>*_
         
           ◯ Help - Instagram profile 
      
           
*_SIMPLE IS BEAUTY 🌙_* 
    
    
    `.trim();
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
handler.command = /^(downloadcmd|downloads|cmddown|down)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    