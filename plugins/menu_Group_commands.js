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
 〽️ ᴍɪᴢᴛʏ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ 〽️   
    

  *< ɢʀᴏᴜᴘ ᴄᴏɴᴛʀᴏʟ ᴄᴏᴍᴍᴀɴᴅꜱ />* 

☐ CMD :- _${usedPrefix}add *<number>*_

      ◯ Help - Add New user to group ( Before disable restrict)
      
      
☐ CMD :- _${usedPrefix}kick *<@tag>*_

      ◯ Help - Remove user from group 
     
      
☐ CMD :- _${usedPrefix}kick2 *<@tag>*_

      ◯ Help - Remove user from group 
 
      
☐ CMD :- _${usedPrefix}listanum *<text>*_

      ◯ Help - Get Group user number list 
    
      
☐ CMD :- _${usedPrefix}kicknum *<text>*_

      ◯ Help - Remove of all numbers in one country code from group 
   
      
☐ CMD :- _${usedPrefix}grup *<open / close>*_

      ◯ Help - Group Open or close 
      
      
☐ CMD :- _${usedPrefix}grouptime *<option> <time>*_
 
      ◯ Help - Temporarily close the group or temporarily running another command
 
      
☐ CMD :- _${usedPrefix}promote *<@tag>*_
 
      ◯ Help - Add new admin  
 
      
☐ CMD :- _${usedPrefix}demote *<@tag>*_
  
      ◯ Help - Removal of Administrator
    
      
☐ CMD :- _admins *<texto>*_ (Use without prefix)
 
      ◯ Help - Tag all admins 
 
      
☐ CMD :- _${usedPrefix}infogroup_
  
      ◯ Help - Group infomation 
  
      
☐ CMD :- _${usedPrefix}resetlink_
   
      ◯ Help - Group link reset 
 
      
☐ CMD :- _${usedPrefix}link_
  
      ◯ Help - Get group link 
    
      
☐ CMD :- _${usedPrefix}setname *<text>*_
    
      ◯ Help - Set group name 
  
      
☐ CMD :- _${usedPrefix}setdesc *<text>*_
  
      ◯ Help - Set New Descripton to group 

      
☐ CMD :- _${usedPrefix}invoke *<text>*_
     
      ◯ Help - 
  
      
☐ CMD :- _${usedPrefix}setwelcome *<text>*_
   
      ◯ Help - Set new group welcome message 
 
      
☐ CMD :- _${usedPrefix}setbye *<text>*_
  
      ◯ Help - Set new group bye message 
 
      
☐ CMD :-_${usedPrefix}hidetag *<text>*_
  
      ◯ Help - Mension all users with text 
    
      
☐ CMD :- _${usedPrefix}hidetag *<audio>*
    
      ◯ Help - Mension all users with audio 
      
      
☐ CMD :- _${usedPrefix}hidetag *<video>*_
     
      ◯ Help - Mension all users with video 
 
      
☐ CMD :- _${usedPrefix}hidetag *<image>*_
    
      ◯ Help - Mension all users with image 
  
      
☐ CMD :- _${usedPrefix}warn *<@tag>*_
    
      ◯ Help - Warn user ( 3times warn auto remove )
    
      
☐ CMD :- _${usedPrefix}unwarn *<@tag>*_
    
      ◯ Help - Remove warn 
  
      
☐ CMD :- _${usedPrefix}listwarn_
  
      ◯ Help - Warned user list 
    
      
☐ CMD :- _${usedPrefix}Unlock_
    
      ◯ Help - 
  
      
☐ CMD :- _${usedPrefix}setpp *<image>*_
     
      ◯ Help - Set profile picture to group 
    
      
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
handler.command = /^(groupmenu|gcmd|groupcommands|groupcmds|infogcmd|gcmenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

    