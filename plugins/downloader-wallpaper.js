import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXAMPEL HOW TO USE COMMAND ${usedPrefix + command} Minecraft*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `*Wallpaper ${text}*`, m);
};
handler.help = ['', '2'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(wallpaperd?)$/i;
export default handler;
