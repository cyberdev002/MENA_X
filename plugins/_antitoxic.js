const toxicRegex = /hutta|huththa|pakaya|keriya|ponnaya|ubakeriyada|hukahan|kkk|fuck|podipaka|කැරියා|පොන්නයා|පකයා|වේසි|වේසිගෙ පුතා|පයිය|හුත්තා|හුත්ති|ක්ක්ක්|ගැහිලද/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, මෙම සමූහයේ  (${isToxic}) වචන තහනම් කර ඇත *${user.warn}/3* WARNING`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`HI *@${m.sender.split`@`[0]}*, you exceeded 3 warnings and you will be blocked and removed from this group`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
