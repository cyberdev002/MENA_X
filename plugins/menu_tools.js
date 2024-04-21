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
    
〽️ ᴍɪᴢᴛʏ ᴛᴏᴏʟꜱ ᴍᴇɴᴜ 〽️    
    

▢ *< ᴛᴏᴏʟꜱ />* ▢

⇨  _${usedPrefix}chatgpt *<text>*_
⇨  _${usedPrefix}delchatgpt
⇨  _${usedPrefix}gptvoz *<text>*_
⇨  _${usedPrefix}dall-e *<text>*_
⇨  _${usedPrefix}spamwa *<name|text|cantidad>*_
⇨  _${usedPrefix}Size *<image / video>*_
⇨  _${usedPrefix}readviewonce *<imagen / video>*_
⇨  _${usedPrefix}clima *<country> <ciudad>*_
⇨  _${usedPrefix}survey *<texto1|texto2...>*_
⇨  _${usedPrefix}afk *<motivo>*_
⇨  _${usedPrefix}ocr *<responde a image>*_
⇨  _${usedPrefix}hd *<responde a imagen>*_
⇨  _${usedPrefix}shorten *<enlace / link / url>*_
⇨  _${usedPrefix}calc *<operacion math>*_
⇨  _${usedPrefix}del *<Message>*_
⇨  _${usedPrefix}whatmusic *<audio>*_
⇨  _${usedPrefix}readqr *<imagen (QR)>*_
⇨  _${usedPrefix}qrcode *<texto>*_
⇨  _${usedPrefix}readmore *<texto1| texto2>*_
⇨  _${usedPrefix}styletext *<texto>*_
⇨  _${usedPrefix}translate *<texto>*_
⇨  _${usedPrefix}Not going *<name>*_
⇨  _${usedPrefix}covid *<Country>*_
⇨  _${usedPrefix}Schedule_
⇨  _${usedPrefix}dropmail_

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
handler.command = /^(tool|tools|toolmenu|toolcmd|cmdtools)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    