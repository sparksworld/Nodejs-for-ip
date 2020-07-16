const alfy = require("alfy");
const query = alfy.input;

const ak = process.env.ak;

if (
    /(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))/.test(
        query
    )
) {
    alfy.fetch(`https://api.map.baidu.com/location/ip?ip=${query}&ak=${ak}`, {
        transform: (body) =>
            body.content
                ? {
                      detail: body.content.address_detail,
                      point: body.content.point
                  }
                : body
    }).then((res) => {
        if (!res.message) {
            alfy.output([
                {
                    title: "归属地：" + res.detail.city || "未知",
                    subtitle: `坐标：x=${res.point.x}, y=${res.point.y}`,
                    arg: res
                }
            ]);
        } else {
            alfy.error(res.message);
        }
    });
} else {
    alfy.error("检测到不是有效的ip地址！");
}
