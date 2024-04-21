import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*🔞 [ Bad Mizty ] +18 commands are disabled in this group, if you are admin and want to enable them use ${usedPrefix}enable _badmizty_*';
  if (!args[0]) throw `\`🔞 [ Bad Mizty ]\`\n\n- *Give me vaild url xnxx video*,\n\n- Example: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*\n\n- *Do you want search xnxx video Type like this*\n\n- Example :.xnxxs japanease \n\n> 18+ Users only `;
  try {
    await conn.reply(m.chat, '\`🔞 [ Bad Mizty ]\`\n\n- Youre Video prossing Wait a movement...\n\n> 18+ Users only ✅', m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `*🔞 [ BAD MIZTY ] A LINK WAS NOT FOUND FOR THAT NUMBER, PLEASE ENTER A NUMBER BETWEEN 1 AND ${matchingItem.urls.length}*`;
            }
          } else {
            throw `*🔞 [ BAD MIZTY] TO BE ABLE TO USE THIS COMMAND LIKE THIS (${usedPrefix + command} <Number>), PLEASE DO THE VIDEO SEARCH WITH THE COMMAND ${usedPrefix}xnxxsearch <texto>*`;
          }
        } else {
          throw `*🔞 [ BAD MIZTY ] TO BE ABLE TO USE THIS COMMAND THIS WAY (${usedPrefix + command} <Number>), PLEASE DO THE VIDEO SEARCH WITH IT COMMAND ${usedPrefix}xnxxsearch <texto>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw '*🔞 [ BAD MIZTY ] ERROR, PLEASE RETURN TRY IT*\n\n*- CHECK THAT THE LINK IS SIMILAR 𝙰:*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*';
  }
};
handler.command = /^(xnxxdl|xnxx)$/i;
export default handler;

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}
