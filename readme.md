用nodejs写一个简单的alfred workflow
---

> 前言：工作中很多时候都要讲究效率，把一些繁琐重复的事精简化。能使你做事，工作都事半功倍～

> 我用的环境`node v10.19.0`, `npm 6.13.4`, `alfred 4.0.9`

> 如果你还不了解[alfred, 点此进入](https://www.alfredapp.com/) 


废话不多说, 就用nodejs做个alfred的workflow工具, 功能需求：

- 获取局域网的IP地址
- 获取公网的IP地址
- 输入IP地址查询归属地

> 因为我本人是从事前端开发的，nodejs对我来说并不陌生，所以今天就讲讲ndoejs开发workflow插件
> 制作初衷：我做的移动端项目很多，常常需要手机与电脑连接一个局域网下进行调试，每次都要查询一下自己的网卡IP。很容易就把自己给累死（哈哈）,于是我就一顿操作

### 先上效果图
- 直接输入ip
![20200716145037-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716145037-alfred-workFlow_2020-07-16.png)
- 直接输入ipp
![20200716145149-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716145149-alfred-workFlow_2020-07-16.png)


- 输入ip + IP地址
![20200716145304-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716145304-alfred-workFlow_2020-07-16.png)



### 搞起来
> 开始前需要了解一下[alfy](https://www.npmjs.com/package/alfy) 

1. 打开alfred的`Preferences`,找到`WorkFlows`,选择列表底部的`+`号，选择`Blank Workflow`
![20200716150500-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716150500-alfred-workFlow_2020-07-16.png)

2. 填写插件名字，描述，分类及版本信息，作者，网站。图标找个喜欢的拖拽到右侧方框里就行了
![20200716150929-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716150929-alfred-workFlow_2020-07-16.png)
> `Bundle Id`必须填写

3. 空白区域点击右键，选择`Inputs` => `Script Filter`,会弹出一个框
![20200716152319-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716152319-alfred-workFlow_2020-07-16.png)

4. 如下填写, 填写之后点击`save`
![20200716154601-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716154601-alfred-workFlow_2020-07-16.png)

5. 点击列表中，新建的`workFlow`选择`open in Finder`
![20200716154950-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716154950-alfred-workFlow_2020-07-16.png)


6. 用自己顺手的编辑器(我用的vscode)打开项目文件夹,并调出终端,在当前文件夹执行`npm init -y`
![20200716165702-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716165702-alfred-workFlow_2020-07-16.png)

    运行完之后需要安装一下依赖
    ```bash
    npm i afly ip --save
    ```

7. 根目录新建`index.js`
    ```javascript
    const alfy = require("alfy");
    const ip = require("ip");

    const localNetWork = ip.address();

    alfy.output([
        {
            title: "局域网地址：" + localNetWork,
            subtitle: "Press ⌘L to see the full error and ⌘C to copy it.",
            arg: localNetWork
        }
    ]);
    ``` 
    终端运行一下`node index.js`,查看输出是否正常，如下正常输出就over
    ![20200716170905-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716170905-alfred-workFlow_2020-07-16.png)

8. 调出`alfred`出入框窗口，输入ip, 显示如下就成功了
![20200716171322-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716171322-alfred-workFlow_2020-07-16.png)



9. 回车将结果放到剪切板（回到`workflow`页面， 右键弹出菜单，选中，点击后会弹出窗口，直接点击`save`保存即可～）
![20200716171530-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716171530-alfred-workFlow_2020-07-16.png)



---
到这里基本流程已经结束，剩下的还需同志们继续努力💪

> 需要剩余功能的同学请在结尾处下载使用，需要申请一个[`ak`](http://lbsyun.baidu.com/apiconsole/key?application=key#/home)参数，请[自行填写](http://lbsyun.baidu.com/apiconsole/key?application=key#/home)

![20200716174434-alfred-workFlow_2020-07-16](https://cdn.jsdelivr.net/gh/sparksworld/upload-images/images/20200716174434-alfred-workFlow_2020-07-16.png)

### 最后
- [Nodejs for ip下载](https://github.com/sparksworld/Nodejs-for-ip/raw/master/Nodejs%20for%20ip.alfredworkflow)
- [项目地址](https://github.com/sparksworld/Nodejs-for-ip)