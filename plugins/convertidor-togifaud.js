/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴍᴇ ᴠɪᴅᴇᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ɢɪꜰ *`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗]  ${mime} *`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ʙʏ ᴍɪᴢᴛʏ ʙᴏᴛ ʙᴇᴛᴀ*'}, {quoted: m});
};
handler.command = ['gif'];
export default handler;
