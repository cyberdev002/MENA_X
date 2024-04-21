import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter the username of a Tik Tok user*';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Here is the profile photo of ${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(tiktokfoto|pptiktok)$/i;
export default handler;
