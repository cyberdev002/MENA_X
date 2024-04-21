export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)${user.afkReason ? ' After being inactive (AFK) for the reason: ' + user.afkReason : ''}*
  
  *—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[❗] don't label it [❗]*

*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙾 𝙴𝚂𝚃𝙰 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾 (𝙰𝙵𝙺)*      
*—◉ ${reason ? ' (𝙰𝙵𝙺): ' + reason : '_'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
