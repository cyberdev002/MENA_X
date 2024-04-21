import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] GIVE ME LINK 𝙶𝙸𝚃𝙷𝚄𝙱, EXAMPLE: ${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD*`;
  if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] LINK INCORRECT!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Please wait a moment while I send your file.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
