import fs from 'fs';

const files = [{
id : 'b1',
name : 'forget_me_not',
path : 'pdf/Forget_me_not_මල්_කිණිත්තක_පුරාවෘත්තය.pdf'
},
{id : 'b2',
name : 'lilak',
path : 'pdf/ලයිලැක්_MIZTY_BETA.pdf'
},

{ id : 'b3',
name :'මැයි_මාර_ප්‍රසංගය',
path : 'pdf/may_mara_prasangaya.pdf'
    
   
},
{ id : 'b4',
  name : 'නුවර_අහස_යට',
  path : 'pdf/නුවර_අහස_යට.pdf'
},

{
    id : 'b5',
    name : 'නිල්_කට්රොල්',
    path : 'pdf/නිල්_කට්රොල්.pdf'
},

{ id :'b6',
  name : 'මීදුම්_නිම්න',
  path : 'pdf/මීදුම්_නිම්න.pdf'
    
    
},

{ id : 'b7',
  name : 'සෙංකොට්ටං',
  path : 'pdf/සෙංකොට්ටං.pdf'
    
    
},

{ id : 'b8',
  name : 'අපූර්වා',
  path : 'pdf/අපූර්වා.pdf'
    
},

{ id : 'b9',
  name : 'බිදුනු_බිලින්දා',
  path : 'pdf/බිදුනු_බිලින්දා.pdf'
  
    
    
},
{ id : 'b10',
  name : 'ලොවීනා',
  path : 'pdf/ලොවීනා.pdf'
    
    
},

{ id : 'b11',
  name : 'වන_අරණක_කුඩා_නිවස_Little_House',
  path : 'pdf/වන_අරණක_කුඩා_නිවස_Little_House.pdf'
},

{ id : 'b12',
  name : 'ලිට්ල්_හවුස්_02_තැනිතලාවේ_පිහිටි_කුඩා_නිවස',
  path : 'pdf/ලිට්ල්_හවුස්_02_තැනිතලාවේ_පිහිටි_කුඩා_නිවස.pdf' 
},

{ id : 'b13',
 name :'ලිට්ල්_හවුස්_03_අල්මන්සෝ_පුංචි_ගොවියා',  
  path : 'pdf/ලිට්ල්_හවුස්_03_අල්මන්සෝ_පුංචි_ගොවියා.pdf'
},

{ id : 'b14',
  name :'ලිට්ල්_හවුස්_04_මිදි_ඔය_අසබඩ',
  path : 'pdf/ලිට්ල්_හවුස්_04_මිදි_ඔය_අසබඩ.pdf' 
},

{ id : 'b15',
  name :'ලිට්ල්_හවුස්_05_රිදී_විල්_තෙර',
  path :'pdf/ලිට්ල්_හවුස්_05_රිදී_විල්_තෙර.pdf'
},

{ id : 'b16',
  name :'ලිට්ල්_හවුස්_06_සීතලෙන්_සීත_වුණු_සීතසමය',  
  path : 'pdf/ලිට්ල්_හවුස්_06_සීතලෙන්_සීත_වුණු_සීතසමය.pdf'
},

{ id : 'b17',
  name : 'ලිට්ල්_හවුස්_07_තැනිතලාවේ_පිහිටි_කුඩා_නගරය', 
  path :'pdf/ලිට්ල්_හවුස්_07_තැනිතලාවේ_පිහිටි_කුඩා_නගරය.pdf' 
    
    
},

{ id : 'b18',
  name :'ලිට්ල්_හවුස්_08_මේ_මිහිරැති_සොඳුරු_සමය',  
  path : 'pdf/ලිට්ල්_හවුස්_08_මේ_මිහිරැති_සොඳුරු_සමය.pdf'
    
},
{ id : 'b19',
  name : 'ලිට්ල්_හවුස්_09_පළමු_සිව්_වසර',  
  path : 'pdf/ලිට්ල්_හවුස්_09_පළමු_සිව්_වසර.pdf'
    
    
},

{ id : 'b20',
  name : 'දලදා_වීදිය',
  path : 'pdf/දලදා_වීදිය.pdf'
    
    
},

{ id :'b21',
  name : 'බියුරෝ',
  path : 'pdf/බියුරෝ.pdf'
    
},

{ id :'b22',
  name : 'මලගිය_ඇත්තෝ', 
  path :'pdf/malagiya_aththo.pdf'  
},

{ id :'b23',
  name : '12.12.12',
  path :'pdf/12.12.12.pdf'  
    
},

{ id : 'b24',
  name : 'ලිලක්',
  path : 'pdf/lilak.pdf'
},

{ id :'b25',
  name : 'රැජින',
  path : 'pdf/රැජින.pdf'
    
    
}

]
const _0x2cb3a8=_0x323e;(function(_0x56fe7f,_0x5e12ee){const _0x5735a3=_0x323e,_0x366f3d=_0x56fe7f();while(!![]){try{const _0x4c7fcb=-parseInt(_0x5735a3(0x88))/0x1*(-parseInt(_0x5735a3(0x87))/0x2)+parseInt(_0x5735a3(0x79))/0x3*(-parseInt(_0x5735a3(0x82))/0x4)+-parseInt(_0x5735a3(0x8d))/0x5*(parseInt(_0x5735a3(0x8b))/0x6)+-parseInt(_0x5735a3(0x93))/0x7+parseInt(_0x5735a3(0x80))/0x8*(parseInt(_0x5735a3(0x7a))/0x9)+-parseInt(_0x5735a3(0x7d))/0xa+parseInt(_0x5735a3(0x7f))/0xb;if(_0x4c7fcb===_0x5e12ee)break;else _0x366f3d['push'](_0x366f3d['shift']());}catch(_0x1b4a65){_0x366f3d['push'](_0x366f3d['shift']());}}}(_0x5a6c,0x1cfaa));const handler=async(_0x3ecd41,{conn:_0x36951e,args:_0x3e5234,usedPrefix:_0x4ea108,command:_0x58caa8})=>{const _0x10f3af=_0x323e;if(!_0x3e5234[0x0])return await _0x3ecd41['reply']('Need\x20Book\x20Id\x20or\x20Name');try{const _0x541c0e=files[_0x10f3af(0x7e)](_0x577015=>_0x577015['id']===_0x3e5234[0x0]['trim']()||_0x577015['name']===_0x3e5234[0x0][_0x10f3af(0x7b)]());if(!_0x541c0e)return await _0x3ecd41[_0x10f3af(0x86)](_0x10f3af(0x95));await _0x36951e[_0x10f3af(0x84)](_0x3ecd41[_0x10f3af(0x8f)],fs[_0x10f3af(0x81)](_0x541c0e[_0x10f3af(0x85)]),_0x541c0e[_0x10f3af(0x92)],'',_0x3ecd41,null,{'caption':_0x10f3af(0x91),'mimetype':_0x10f3af(0x7c),'asDocument':!![]});}catch(_0xe9b1eb){console[_0x10f3af(0x90)](_0xe9b1eb),await _0x3ecd41['reply'](_0x10f3af(0x89));}};function _0x5a6c(){const _0x4b8145=['path','reply','44dWnMHG','6049ZmHlob','error','command','6288cHujcC','\x20<id>','1010OZaJEJ','help','chat','log','pakaya','name','56777zDgDCi','tags','Need\x20Book\x20Id\x20or\x20Name','33yPgMlU','9AUZTNL','trim','application/pdf','524550VccOvi','find','1366156tVlKBs','1581032ZujSuH','readFileSync','23252XylNkn','downloader','sendFile'];_0x5a6c=function(){return _0x4b8145;};return _0x5a6c();}function _0x323e(_0x230dee,_0x11b3bd){const _0x5a6c5c=_0x5a6c();return _0x323e=function(_0x323e41,_0x26dd0f){_0x323e41=_0x323e41-0x79;let _0x57db5c=_0x5a6c5c[_0x323e41];return _0x57db5c;},_0x323e(_0x230dee,_0x11b3bd);}handler[_0x2cb3a8(0x8e)]=['ravi']['map'](_0x3fcd91=>_0x3fcd91+_0x2cb3a8(0x8c)),handler[_0x2cb3a8(0x94)]=[_0x2cb3a8(0x83)],handler[_0x2cb3a8(0x8a)]=/^(book|ravi|manoj)$/i;export default handler;