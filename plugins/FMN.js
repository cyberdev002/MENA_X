const handler = async (m, {conn}) => {
  const vn = './pdf/Forget_me_not_මල්_කිණිත්තක_පුරාවෘත්තය.pdf';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*🏳️‍🌈 𝙼𝙸𝚁𝙴𝙽 𝙰 𝙴𝚂𝚃𝙴 𝙶𝙰𝚈 🏳️‍🌈*', m);
  await conn.sendMessage(m.chat, {audio: {url: vn}, fileName: `error.pdf`, mimetype: 'application/x-pdf', ptt: true}, {quoted: m});
};
handler.help = ['gay'];
handler.tags = ['maker'];
handler.command = /^(gay)$/i;
export default handler;
