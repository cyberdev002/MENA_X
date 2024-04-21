import cheerio from 'cheerio'

import axios from 'axios'

import fs from 'fs'

global.is_started = false



var news_jids = ["120363246954146719@g.us"//@whatsapp.net"
];

var footer = "ᴘᴏᴡᴇʀᴅ ʙʏ ᴍɪᴢᴛʏ ɴᴇᴡꜱ 🗞️"





function read(file) {

    try {

        return fs.readFileSync(file, "utf-8")

    } catch {}

    return ""

}

async function hiru_list() {

    var news = []

    try {

        var data = await axios.get('https://www.hirunews.lk/')

        var $ = cheerio.load(data.data)

        var main = $('div.main-article-topic > a')

        news.push({

            title: main.text(),

            id: main.attr('href').split('/')[3]

        })

        $('div.middle-article > div > div > div.middle-sm-topic > a').each((i, el) => {

            news.push({

                title: $(el).text(),

                id: $(el).attr('href').split('/')[3]

            })

        });

        $('div.section-tittle > a').each((i, el) => {

            news.push({

                title: $(el).text(),

                id: $(el).attr('href').split('/')[3]

            })

        });

    } catch (e) {

        console.log(e)

    }

    return news.sort((b, a) => Number(a.id) - Number(b.id))

}

async function hiru_news(id) {

    try {

        var url = 'https://www.hirunews.lk/' + id

        var data = await axios.get(url)

        var $ = cheerio.load(data.data)

        var news = $('div.container')

        var img = news.find("div.main-article-banner > img").attr('data-src')

        var title = news.find('h1.main-tittle').text()

        var time = news.find('h1.main-tittle').next('p').text().trim().replace('\t\t', '').replace('  ', '')

        var content = cheerio.load('<p>' + news.find('#article-phara2').html().replace(new RegExp('<br>', 'g'), '\n').trim() + '</p>').text()

        return {

            done: true,

            img,

            title,

            newsartical: content,

            url,

            time

        }

    } catch (e) {

        console.log(e)

    }

    return {

        done: false

    }

}



async function list() {

    var data = []

    let latest = "";

    var es = await hiru_list()

    var db = read('./news_db.txt')
    let need_end = false

    for (let news of es) {
        if (db == news.id) need_end = true;

        if (!need_end) {
            var dt = await hiru_news(news.id, news.img, news.title)
            if (!latest) latest = news.id

            if (dt.done) data.push(dt)

        }

    }

    if (latest) db = latest

    fs.writeFileSync('./news_db.txt', db + "")

    return data.reverse()

}



let handler = async (m, {

    conn,

    command,

    text,

    usedPrefix

}) => {

    if (global.is_started) return conn.sendMessage(m.chat, {

        image: {

            url: "https://i.ibb.co/Jc6h1GN/ab67616d0000b2731367e43179ee624f4242be33.jpg"

        },

        caption: '`NEWS Bot Already Started`\n> ' + footer

    })

    global.is_started = true

    conn.sendMessage(m.chat, {

        image: {

            url: "https://i.ibb.co/Jc6h1GN/ab67616d0000b2731367e43179ee624f4242be33.jpg"

        },

        caption: '`NEWS Bot Started`\n> ' + footer

    })

    setInterval(async () => {

        var data = await list()

        for (let news_data of data) {
for(let news_jid of news_jids) {
            try {

                await conn.sendMessage(news_jid, {

                    image: {

                        url: news_data.img

                    },

                    caption: `\`${news_data.title}\`\n\n${news_data.newsartical}\n\n* ${news_data.url}\n\n> ${news_data.time}\n> `+ footer

                })

            } catch (e) {

                console.log(e)

            }
}
        }

    }, 1 * 60 * 1000);

}



handler.command = /^(hiru_news_start|mnr)$/i

export default handler