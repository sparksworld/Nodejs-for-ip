const alfy = require("alfy");
const ip = require("ip");
const publicIp = require("public-ip");

const localNetWork = ip.address();

publicIp
    .v4()
    .then((ipp) => {
        const publicNetwork = ipp;
        alfy.output([
            {
                title: "局域网地址：" + localNetWork,
                subtitle: "Press ⌘L to see the full error and ⌘C to copy it.",
                arg: localNetWork
            },
            {
                title: "公网地址: " + publicNetwork,
                subtitle: "Press ⌘L to see the full error and ⌘C to copy it.",
                arg: publicNetwork
            }
        ]);
    })
    .catch((err) => {
        alfy.error(err);
    });
