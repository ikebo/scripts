const pac = require('./proxy_1')

let st = +new Date()

// let url = "https://soundcloud.com/discover"
let url = "https://baidu.com/discover"
let host = "baidu.com"
let route = pac.FindProxyForURL(url, host)

let cost = +new Date() - st

console.log('route: ', route, 'cost: ', cost)