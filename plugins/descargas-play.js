import fetch from 'node-fetch';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fs from "fs";
import yts from 'yt-search';
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `_*< SONG - DOWNLOADER />*_\n\n*[ ℹ️ ] You need the name or link of the YouTube video.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} freeky mobbing legendry`;
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'song') {
      additionalText = 'audio';
    } else if (command === 'video') {
      additionalText = 'vídeo';
    }
    const texto1 = `_*< SONG - DOWNLOADER />*_\n\n▢ *Title:* ${yt_play[0].title}\n\n▢ *Publish:* ${yt_play[0].ago}\n\n▢ *Duration:* ${secondString(yt_play[0].duration.seconds)}\n\n▢ *Visitors:* ${`${MilesNumber(yt_play[0].views)}`}\n\n▢ *Autor:* ${yt_play[0].author.name}\n\n▢ *ID:* ${yt_play[0].videoId}\n\n▢ *Type:* ${yt_play[0].type}\n\n▢ *Url:* ${yt_play[0].url}\n\n▢ *Channel:* ${yt_play[0].author.url}\n\n*[ ℹ️ ] the ${additionalText}. wait...*\n\n☐ SIMPLE IS BEAUTY 🌙`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
    try {   
    const audio = global.API('ApiEmpire', `/api/v1/ytmp3?url=${yt_play[0].url}`)
    const ttl = await yt_play[0].title
    const buff_aud = await getBuffer(audio);
    const fileSizeInBytes = buff_aud.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);       
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: `*[ ✔ ] Download your audio at${audio}*`}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;    
    }} catch {
    throw '_*< SONG - DOWNLOADER />*_\n\n*[ ℹ️ ] An error occurred.  Please try again later.*';    
    }}
    if (command == 'play2') {
    try {   
    const video = global.API('ApiEmpire', `/api/v1/ytmp4?url=${yt_play[0].url}`)
    const ttl2 = await yt_play[0].title
    const buff_vid = await getBuffer(video);
    const fileSizeInBytes2 = buff_vid.byteLength;
    const fileSizeInKB2 = fileSizeInBytes2 / 1024;
    const fileSizeInMB2 = fileSizeInKB2 / 1024;
    const size2 = fileSizeInMB2.toFixed(2);       
    if (size2 >= limit2) {  
    await conn.sendMessage(m.chat, {text: `_*< SONG - DOWNLOADER />*_\n\n*[ ✔ ] Download your video at ${video}*`}, {quoted: m});
    return;    
    }     
    if (size2 >= limit1 && size2 <= limit2) {  
    await conn.sendMessage(m.chat, {document: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;    
    }} catch {
    throw '_*< SONG - DOWNLOADER />*_\n\n*[ ℹ️ ] An error occurred.  Please try again later.*';    
    }
  }
};
handler.command = /^(song|video)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? 'd ' : 'd ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? 'h ' : 'h ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? 'm ' : 'm ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};
