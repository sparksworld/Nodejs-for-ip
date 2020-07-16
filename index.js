const alfy = require("alfy");
const ip = require("ip");

// console.log(alfy.input)

const localNetWork = ip.address();

alfy.output([
    {
        title: "局域网地址：" + localNetWork,
        subtitle: "Press ⌘L to see the full error and ⌘C to copy it.",
        arg: localNetWork
    }
]);

// console.log(JSON.stringify({
//     items: [{
//         title: '局域网地址：' + localNetWork,
//         subtitle: 'Press ⌘L to see the full error and ⌘C to copy it.',
//         arg: localNetWork
//     }]
// }))

// publicIp.v6().then(ip => {
//     console.log(ip);
//     //=> 'fe80::200:f8ff:fe21:67cf'
// });
