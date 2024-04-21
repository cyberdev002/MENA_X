import fetch from 'node-fetch';



const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) {

    throw `_*< LIAMA - AI />*_\n\n*[ ℹ️ ] Provide a text.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} Hello Liama, how are you_`;

  }



  try {

    conn.sendPresenceUpdate('composing', m.chat);



    const API_URL = `https://vihangayt.me/tools/llama-2?q=${encodeURIComponent(text)}`;

    const response = await fetch(API_URL);

    const data = await response.json();



    if (data.status && data.data) {

      const respuestaAPI = data.data;

      conn.reply(m.chat,"*LIAMA*\n```\n" + respuestaAPI +"\n```\nᴍɪᴢᴛʏ ʙᴇᴛᴀ", m);

    } else {

      throw '_*< LIAMA - AI />*_\n\n*[ ℹ️ ] Could not get a valid response.*';

    }

  } catch (error) {

    throw `_*< LIAMA - AI />*_\n\n*[ ℹ️ ] An error occurred.  Please try again later.*`;

  }

};



handler.command = /^liama$/i;



export default handler;

