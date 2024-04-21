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
    
   
▢ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />* ▢

☐ CMD :- _${usedPrefix}sticker *<react a image or video>*_
          
               ◯ Help - Make a sticker [ Image or Video ]
     
               
☐ CMD :- _${usedPrefix}sticker *< link / url>*_
 
               ◯ Help - Meke a sticker [ Give me video or photo url ]
               
               
☐ CMD :- _${usedPrefix}sticker2 *<react a image or video>*_
               ◯ Help - Make a sticker [ Image or Video ]
               
               
☐ CMD :- _${usedPrefix}sticker2 *< link / url>*_
    
               ◯ Help - Make a Sticker [ Give me video or photo url ]
               
               
☐ CMD :- _${usedPrefix}s *<react a image or video>*_

               ◯ Help - Make a Sticker [ Image or Video ]
               
               
☐ CMD :- _${usedPrefix}s *< link / url>*_
               
               ◯ Help - Make a sticker [ Give me video or photo url ]
               
               
☐ CMD :- _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  
               ◯ Help - Make a sticker using two imoji [ .emojimix 🙁+😁 ]
               
               
☐ CMD :- _${usedPrefix}scircle *<imagen>*_
               
               ◯ Help - *Now not Working*
               
               
☐ CMD :- _${usedPrefix}sremovebg *<imagen>*_
               
               ◯ Help - Remove background & Give you as sticker 
               
               
☐ CMD :- _${usedPrefix}qc *<text>*_

              ◯ Help - A sticker is made in the same way as the message you sent
    
              
☐ CMD :- _${usedPrefix}wm *<packname> <author>*_

              ◯ Help - Change a sticker info [ .wm NILUPUL | BY MIZTA]
              
              
□ CMD :- _${usedPrefix}stickermarker *<effect> <imagen>*_

              ◯ Help - Make a sticker with effect 
    
             
□ CMD :- _${usedPrefix}stickerfilter *<effect> <imagen>*_
    
              ◯ Help - Make a sticker with effect 
              
               
□ CMD :- _${usedPrefix}cartoon *<responder a imagen>*_

             ◯ Help - Make a sticker like a cartoon 
 
 
□ CMD :- _${usedPrefix}pat *<@tag>*_
  
              ◯ Help - Shaking head
              
              
□ CMD :- _${usedPrefix}slap *<@tag>*_

              ◯ Help - Hitting the ear
              
              
□ CMD :- _${usedPrefix}kiss *<@tag>*_

             ◯ Help - kiss 
             
             
□ CMD :- _${usedPrefix}dado_

                         
☐ CMD :- _${usedPrefix}attp *<text>*_

              ◯ Help - Making a sticker with lots of colors


▣ CMD :-_${usedPrefix}attp2 *<text>*_

▣ CMD :- _${usedPrefix}attp3 *<text>*_
             
▣ CMD :- _${usedPrefix}ttp *<text>*_
              
▣ CMD :- _${usedPrefix}ttp2 *<text>*_
             
▣ CMD :- _${usedPrefix}ttp3 *<text>*_

▣ CMD :- _${usedPrefix}ttp4 *<text>*_

▣ CMD :- _${usedPrefix}ttp5 *<text>*_






▢ 〽️ ꜱɪᴍᴘʟᴇ ɪꜱ ʙᴇᴀᴜᴛʏ 〽️ ▢

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
handler.command = /^(stcmd|cmdsticker|stickercmd|stickermaker)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    
