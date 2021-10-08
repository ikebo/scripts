// import {runAppleScript} from 'run-applescript';
// module = require('module');
// const fs = require('fs');
// module.Module._extensions['.js'] = function (module, filename) {
//   const contents = fs.readFileSync(filename, 'utf8');
//   module._compile(require('fs').readFileSync(filename, 'utf8'), filename);
// };

// const {runAppleScript} = require('run-applescript');

// async function test() {
//     const result = await runAppleScript('return "unicorn"');
//     console.log(result);
// }

// test().then((res) => {
//     console.log('res: ', res)
// })


import {runAppleScript} from 'run-applescript';

const result = runAppleScript('return "unicorn"');

console.log(result);
