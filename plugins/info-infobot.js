import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
      〘 ʙᴏᴛ ɪɴꜰᴏ 〙 

☐  ᴄʀᴇᴀᴛᴏʀ: *ᴍɪᴢᴛᴀ*
 
☐  ɴᴜᴍʙᴇʀ: *94701337346*
 
☐  ᴘʀᴇꜰɪx: *${usedPrefix}*
 
☐  ᴄʜᴀᴛꜱ: *${chats.length - groups.length}*
 
☐  ɢʀᴏᴜᴘꜱ: *${groups.length}*
  
☐  ᴛᴏᴛᴀʟ ᴄʜᴀᴛꜱ: *${chats.length}* 
 
☐  ᴜᴘᴛɪᴍᴇ: *${uptime}*
 
☐  ᴜꜱᴀɢᴇ: *${totalreg} ɴᴜᴍʙᴇʀꜱ*
 
☐  ᴀᴜᴛᴏʀᴇᴀᴅ: ${autoread ? "*acvated*" : "*disactivated*"}
 
☐  ʀᴇꜱᴛʀɪᴄᴛ: ${restrict ? "*activated*" : "*𝚍𝚎𝚜activated*"}
  
☐  ᴘᴄᴏɴʟʏ: ${pconly ? "*activated*" : "*desactivated*"}
 
☐  ɢᴄᴏɴʟʏ: ${gconly ? "*activated*" : "*desactivated*"}
 
☐  ᴍᴏᴅᴇ: ${self ? "*privet*" : "*public*"}
 
☐  ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ: ${modejadibot ? "*activated*" : "*desactivated*"}
 
☐  ᴀɴᴛɪᴄᴀʟʟ: ${antiCall ? "*activated*" : "*desactivated*"}
 
☐  ꜱᴘᴇᴇᴅ: 
  *${speed} ms* 

 ꜱɪᴍᴘʟᴇ ɪꜱ ʙᴇᴀᴜᴛʏ 🌙 
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝙱𝚈 𝙼𝙸𝚉𝚃𝙰 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/",
        mediaType: 2,
        previewType: "pdf",
        title: "𝙱𝙾𝚃 𝙱𝚈 ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://wa.me/94701337346",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
