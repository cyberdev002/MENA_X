import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '⚠️ *_What do you want  to search on YouTube?_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
\`° ${v.title}\`\n\n
- ↳  *_ʟɪɴᴋ :_* ${v.url}
- ↳  *_ᴅᴜʀᴀᴛɪᴏɴ :_* ${v.timestamp}
- ↳  *_ᴜᴘʟᴏᴀᴅᴇᴅ :_* ${v.ago}
- ↳  *_ᴠɪᴇᴡꜱ :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n> ꜱɪᴍᴘʟᴇ ɪꜱ ʙᴇᴀᴜᴛʏ 🌙\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
