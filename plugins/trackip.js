// # /////////////////////////////////////////////////////////////////////////// #
// #                                                                             #
// #                      Copyright 2022 TheH2SO4 (Hiro)                         #
// #                                                                             #
// #   Licensed under the Apache License, Version 2.0 (the "License");           #
// #   you may not use this file except in compliance with the License.          #
// #   You may obtain a copy of the License at                                   #
// #                                                                             #
// #       http://www.apache.org/licenses/LICENSE-2.0                            #
// #                                                                             #
// #   Unless required by applicable law or agreed to in writing, software       #
// #   distributed under the License is distributed on an "AS IS" BASIS,         #
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  #
// #   See the License for the specific language governing permissions and       #
// #   limitations under the License.                                            #
// #                                                                             #
// # /////////////////////////////////////////////////////////////////////////// #

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// #

// # || Start [📍] || #

import { getCustomIpDetails } from '@sarequl/client-ip-details';
import { isIP } from 'is-ip';
import getSymbolFromCurrency from 'currency-symbol-map';
import clm from 'country-locale-map';
import country from 'countryjs';

const PLUGIN_VERSION="1.1.2"

let handler = async (m, { text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! Esta no es la manera correcta de usar *${usedPrefix}trackip*. La manera correcta de usarla es *${usedPrefix}trackip + <(IPv4/IPv6) publica del archivo>*! Ejemplo: *${usedPrefix}trackip 179.24.239.201*.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                if (isIP(args[0])) {
                    const publicIP = await getCustomIpDetails(args[0])
                        const countryClm = clm.getCountryByAlpha2(publicIP.countryCode)
                            const countryJs = country.info(publicIP.countryCode)
                                for (var i = 0; i < countryJs.tld.length; i++) {
                                    message(`───────────ᴍɪᴢᴛʏ ɪᴘ ᴛʀᴀᴄᴇ───────────\n\n[✅] Information has been found about: ' *${args[0]}* '!\n\n➤ _(IPv4/IPv6): *${publicIP.query}*_\n➤ _Mobile Network: *${publicIP.mobile ? '✅':'❌'}*_\n➤ _(Proxy/VPN): *${publicIP.proxy ? '✅':'❌'}*_\n➤ _Hosting (VPS/VDS/DEDI): *${publicIP.hosting ? '✅':'❌'}*_\n➤ _Country: *${publicIP.country}*_\n➤  _Country name(ES): *${countryJs.translations.es}*_\n➤ _Native name of the country: *${countryJs.nativeName}*_\n➤ _Number of Borders: *${countryJs.borders.length}*_\n➤ _Total area of ​​the country: *${countryJs.area} (KM^2)*_\n➤ _Capital of the country: *${countryClm.capital}*_\n➤ _Number of provinces in the country: *${countryJs.provinces.length}*_\n➤ _Country flag: *${countryClm.emoji}*_\n➤ _Flag Code: *${countryClm.emojiU}*_\n➤ _Country code: *${publicIP.countryCode}*_\n➤ _Country Code (Numeric): *${countryClm.numeric}*_\n➤ _Language of the country: *${countryJs.languages[0]}*_\n➤ Number of languages ​​in the country: *${countryJs.languages.length}*_\n➤ _Country prefix: *+${countryJs.callingCodes[0]}*_\n➤ _Number of country prefixes: *${countryJs.callingCodes.length}*_\n➤ _Country Domains: *${countryJs.tld[i]}*_\n➤ _Number of domains in the country: *${countryJs.tld.length}*_\n➤ _Continent (EN): *${publicIP.continent}*_\n➤ _Continent Code: *${publicIP.continentCode}*_\n➤ _Wikipedia: *${countryJs.wiki}*_\n➤ _Region: *${publicIP.regionName}*_\n➤ _Region Code: *${publicIP.region}*_\n➤ _City: *${publicIP.city}*_\n➤ _Postal Code: *${publicIP.zip}*_\n➤ _Latitude: *${publicIP.lat}*_\n➤ _Longitud: *${publicIP.lon}*_\n➤ _Time zone: *${publicIP.timezone}*_\n➤ _Local currency: *${publicIP.currency}*_\n➤ _Local Currency Symbol: *${getSymbolFromCurrency(publicIP.currency)}*_\n➤ _Number of coins: *${countryJs.currencies.length}*_\n➤ _Number of Inhabitants: *${countryJs.population}*_\n➤ _Demonym (EN): *${countryJs.demonym}*_\n➤ _ISP: *${publicIP.isp}*_\n➤ _Organization: *${publicIP.org}*_\n➤ _ASN: *${publicIP.as}*_\n➤ _Name of ASN: *${publicIP.asname}*_\n➤ _Reverse Proxy: *${publicIP.reverse}*_\n\n_This information about the address (IPv4/IPv6) ' *${publicIP.query}* ' is not 100% accurate._\n\nᴍɪᴢᴛʏ-ʙᴇᴛᴀ\n\n───────────ꜱɪᴍᴘʟᴇ ɪꜱ ʙᴇᴀᴜᴛʏ 🌙───────────`)   
                                }
                } else {
                    message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Esta direccion (IPv4/IPv6) no es valida. Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                }
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['trackip + <(IPv4/IPv6) publica>']
handler.tags = ['tools']
handler.command = ['trackip']
export default handler