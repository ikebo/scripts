const pac = require('./proxy_1')

let st = +new Date()

let url = "http://github.com/"
let host = "github.com"
let route = pac.FindProxyForURL(url, host)

let cost = +new Date() - st

console.log('route: ', route, 'cost: ', cost)