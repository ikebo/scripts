
const fs = require('fs');

/**
 * pac server & rule keeper
 */
class PAC {
   // 1、生成pac规则文件 
   // 用web server 托管这个文件
   _gfwlist_url = "https://cdn.jsdelivr.net/gh/gfwlist/gfwlist/gfwlist.txt"
   _gfwlist_file = "./gfwlist.txt"
   _abp_file = "./abp.js"

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

   static getPacUrl() {
       return null;
   }

   _getAbpFile() {
       return this._abp_file
   }

   _getGfwlistFile() {
       // TODO, update from url according to last modified time
       return this._gfwlist_file
   }

   _gfwFilter(line) {
       if (!/\S/.test(line)) {
           return false
       }
       let chr = line[0];
       if (chr === '!' || chr === '[') {
            return false
       }
       return true
   }

   _genPacFile() {
        let fn = this._getGfwlistFile()
        let gfw = fs.readFileSync(fn)
        let content = Buffer.from(gfw.toString(), 'base64').toString()
        let lines = content.split('\n')
        lines = lines.filter(this._gfwFilter)
        let rules = JSON.stringify(lines, null, 2)
        let abp = fs.readFileSync(this._getAbpFile()).toString()
        console.log(abp)
        abp = this.replaceAll(abp, '__RULES__', rules)
        abp = this.replaceAll(abp, '__SOCKS5ADDR__', '127.0.0.1')
        abp = this.replaceAll(abp, '__SOCKS5PORT__', '1083')
        fs.writeFileSync('./tmp', abp)
   }
}

let pac = new PAC()
pac._genPacFile()