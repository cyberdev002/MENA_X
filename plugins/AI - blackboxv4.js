import fetch from 'node-fetch';



const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) {

    throw `_*< BLACK_BOX - AI />*_\n\n*[ ℹ️ ] Provide a text.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} Hello Blackbox, how are you_`;

  }



  try {

    conn.sendPresenceUpdate('composing', m.chat);



    const API_URL = `https://vihangayt.me/tools/blackboxv4?q=${encodeURIComponent(text)}`;

    const response = await fetch(API_URL);

    const data = await response.json();



    if (data.status && data.data) {

      const respuestaAPI = data.data;

      conn.reply(m.chat,"*BLACK_BOX_V4*\n```\n" + respuestaAPI +"\n```\nᴍɪᴢᴛʏ ʙᴇᴛᴀ", m);

    } else {

      throw '_*< BLACK_BOX - AI />*_\n\n*[ ℹ️ ] Could not get a valid response.*';

    }

  } catch (error) {

    throw `_*< BLACK_BOX - AI />*_\n\n*[ ℹ️ ] An error occurred.  Please try again later.*`;

  }

};



handler.command = /^blackbox$/i;



export default handler;

