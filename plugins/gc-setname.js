import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Enter the name you want to be the new group name*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] Im sorry there was a mistake, The name cannot be more than 25 characters*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
