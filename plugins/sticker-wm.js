import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] Reply to the sticker that you want to add a package and a name*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] Reply to the sticker that you want to add a package and a name*';
    const img = await m.quoted.download();
    if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗] Reply to the sticker that you want to add a package and a name*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY, SOMETHING WRONG. PLEASE VERIFY THAT YOU HAVE RESPONDED TO A STICKER AND ADDED A PACKAGE NAME AND A USERNAME*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|get|ganim|wm$/i;
export default handler;
