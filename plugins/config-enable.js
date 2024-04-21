const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
const optionsFull = `_*< FUNCIONES DEL BOT />*_\n 
.
▢ *Description:* Activate or deactivate the Bot's restrictions, such as removing or adding people to a group.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* ☑️ |  AUTOREAD
 ▢ *Command:* ${usedPrefix + command} autoread
 ▢ *Description:* Mark messages and statuses as read automatically.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* 🔊 |  AUDIO
 ▢ *Command:* ${usedPrefix + command} audios
 ▢ *Description:* Activates or deactivates audio commands without prefixes, in the group.

 --------------------------------

 ▢ *Option:* 👾 |  AUTOSTICKER
 ▢ *Command:* ${usedPrefix + command} autosticker
 ▢ *Description:* All images or videos sent in the group become stickers.

 --------------------------------

 ▢ *Option:* 💬 |  PCONLY
 ▢ *Command:* ${usedPrefix + command} pconly
 ▢ *Description:* The Bot will only respond to commands if it is a private chat.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* 🏢 |  GCONLY
 ▢ *Command:* ${usedPrefix + command} gconly
 ▢ *Description:* The Bot will only respond to commands if it is a group.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* ❌ |  ANTIVIEWONCE
 ▢ *Command:* ${usedPrefix + command} antiviewonce
 ▢ *Description:* Images sent to be viewed only once are resent normally by the Bot.

 --------------------------------

 ▢ *Option:* 📵 |  ANTI-CALLS
 ▢ *Command:* ${usedPrefix + command} anticall
 ▢ *Description:* The Bot will block people who call the Bot.
 ▢ *Note:* This command can only be used by Bot owners.

 --------------------------------

 ▢ *Option:* 🤬 |  ANTITOXIC
 ▢ *Command:* ${usedPrefix + command} antitoxic
 ▢ *Description:* Detects bad words and warns the group participant before being eliminated.
 ▢ *Note:* You need to have the restrict function active.

 --------------------------------

 ▢ *Option:* 🕸️ |  ANTI-LOCK
 ▢ *Command:* ${usedPrefix + command} anti-latch
 ▢ *Description:* The Bot detects long texts that could be viruses and cause chat lag and eliminates the user.
 ▢ *Note:* You need to have the restrict function active.

 --------------------------------

 ▢ *Option:* 👎 |  ANTI-ARAB
 ▢ *Command:* ${usedPrefix + command} anti-Arab
 ▢ *Description:* If an Arabic number joins the group, the Bot automatically deletes it.
 ▢ *Note:* You need to have welcome and restrict active.

 --------------------------------

 ▢ *Option:* 👎 |  ANTIARAB 2
 ▢ *Command:* ${usedPrefix + command} antiarabes2
 ▢ *Description:* If an Arabic number writes in the group, the Bot automatically deletes it.
 ▢ *Note:* You need to have the restrict function active.

 --------------------------------

 ▢ *Option:* 👑 |  ADMINMODE
 ▢ *Command:* ${usedPrefix + command} adminmode
 ▢ *Description:* The bot will only respond to messages sent by admins.  of the group.

 --------------------------------

 ▢ *Option:* 😃 |  SIMSIMI
 ▢ *Command:* ${usedPrefix + command} simsimi
 ▢ *Description:* The bot will start responding to messages using SimSimi's AI.

 --------------------------------
 
 ▢ *Option:* 🛡️ |  ANTIDELETE
 ▢ *Command:* ${usedPrefix + command} antidelete
 ▢ *Description:* The bot detects when a user deletes a message and resends it.

 --------------------------------

 ▢ *Option:* 🔊 |  AUDIOS_BOT
 ▢ *Command:* ${usedPrefix + command} audios_bot
 ▢ *Description:* The audios of the Audio Menu Bot are deactivated for all private chats.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* 🤖 |  MODOIA
 ▢ *Command:* ${usedPrefix + command} modeia
 ▢ *Description:* "Artificial Intelligence" mode with ChatGPT is activated in all private chats.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* ⏳ |  ANTI-SPAM
 ▢ *Command:* ${usedPrefix + command} antispam
 ▢ *Description:* The Bot detects when a user does command spam and bans them for 5 seconds and warns them.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* 🤖 |  MODEJADIBOT
 ▢ *Command:* ${usedPrefix + command} modejadibot
 ▢ *Description:* Enables or disables the use of the command for sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot).
 ▢ *Note:* This command can only be used by the owner(s) of the bot.

 --------------------------------

 ▢ *Option:* 💬 |  ANTIPRIVATE
 ▢ *Command:* ${usedPrefix + command} antiprivate
 ▢ *Description:* The Bot will block people who write to the Bot's private address.
 ▢ *Note:* This command can only be used by the owner(s) of the bot.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `_*< FUNCIONES DEL BOT />*_\n\n*[ ℹ️ ] La opción* _${type}_ *fue* ${isEnable ? '_activada_' : '_desactivada_'} *exitosamente para este* ${isAll ? '_bot._' : isUser ? '' : '_chat._'}`}, {quoted: m});
  //conn.sendMessage(m.chat, {text: `▢ *Opción:* ${type}\n\n▢ *Estado:* ${isEnable ? 'Activado' : 'Desactivado'}\n\n▢ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
};
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;