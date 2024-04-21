import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `_*< GITHUB - DOWNLOADER />*_\n\n*[ ℹ️ ] Give me a github link.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD_`;
  if (!regex.test(args[0])) throw '_*< GITHUB - DOWNLOADER />*_\n\n*[ ℹ️ ] Incorrect link.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*< GITHUB - DOWNLOADER />*_\n\n*[ ℹ️ ] The file is processing.  wait...If it does not ship, it could be because it exceeds the size limit*\n\n*ꜱɪᴍᴘʟᴇ ɪꜱ ʙᴇᴀᴜᴛʏ 🌙.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /gitclone/i;
export default handler;
