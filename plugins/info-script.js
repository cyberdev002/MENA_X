import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/MIZTAx/MIZTY_BETA');
   const json = await res.json();
   let txt = `           *乂  B O T  -  S C R I P T  乂*\n\n`;
      txt += `◦  *Name:* ${json?.name || 'TheMizty-Bot-MD'}\n`;
      txt += `◦  *Visitores:* ${json?.watchers_count || '-'}\n`;
      txt += `◦  *Size:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n`;
      txt += `◦  *Date:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n`;
      txt += `◦  *Url:* ${json?.html_url || 'Not Awalable Now'}\n\n`;
      txt += `	 ${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `wa.me//94701337346`, "sourceUrl": `wa.me//94701337346`}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|scrip|script)$/i;
export default handler;
