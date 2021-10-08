
const {exec, execSync} = require('child_process')
const fs = require('fs')

/**
 * proxy confer
 */
class ProxyConfer {
    _pac_url = undefined
    _socks_host = undefined
    _socks_port = undefined
    _confer_installer_path = "./install.sh"
    _confer_path = "/Library/Application\ Support/xiaoyu/proxy_conf_helper"

    constructor(pac_url, socks_host, socks_port) {
        this._pac_url = pac_url
        this._socks_host = socks_host
        this._socks_port = socks_port
    }

    _has_installed() {
        return fs.existsSync(this._confer_path)
    }

    _install() {
        if (this._has_installed()) {
            return true
        }
        execSync(`osascript -e 'do shell script "/bin/bash ${this._confer_installer_path}" with administrator privileges'`, function(error, stdout, stderr) {
            console.log("install err: ",  error, "stdout: ", stdout, "stderr:", stderr)
            if (error) {
                return false
            }
            return true
        })
    }

    enablePacProxy() {
        this._install()
        exec(`'${this._confer_path}' -m auto -u ${this._pac_url}`, function(error, stdout, stderr) {
            console.log("enable pac err: ",  error, "stdout: ", stdout, "stderr:", stderr)
            if (error) {
                return false
            }
            return true
        })
    }

    enableGlobalProxy() {
        this._install()
        exec(`'${this._confer_path}' -m global -l ${this._socks_host}  -p ${this._socks_port}`, function(error, stdout, stderr) {
            console.log("enable pac err: ",  error, "stdout: ", stdout, "stderr:", stderr)
            if (error) {
                return false
            }
            return true
        })
    }

    disableProxy() {
        this._install()
        exec(`${this._confer_path} -m off`, function(error, stdout, stderr) {
            console.log("enable pac err: ",  error, "stdout: ", stdout, "stderr:", stderr)
            if (error) {
                return false
            }
            return true
        })
    }
}

module.exports = { ProxyConfer }

// let confer = new ProxyConfer("http://127.0.0.1:1083", "0.0.0.0", 1083)
// console.log(confer._install())
// confer.enablePacProxy()