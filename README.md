模拟叫号，完美还原银行叫号机

### 部署
1.[下载语音包](https://github.com/ch98196/NumberCalling/releases/download/resource/audio.zip)部署到CDN、对象存储等（推荐[多吉云](https://www.dogecloud.com/)，实名认证就有每月免费额度）

2.clone整个仓库，然后导入`微信开发者工具`

3.将`pages/index/index.js`第97行的`[your domain]`替换为你的域名

4.编译、运行、发布

### 二开指南
1.目前只能按数字读（如`123`读作“一二三”，而非“一百二十三”），你可以在`index.js`中增加这样的逻辑

2.界面采用了[WEUI](https://github.com/Tencent/weui-wxss)，你可以使用其他的开源组件库，或者自己设计其他的UI

3.你还可以将其改造为[uniapp](https://uniapp.dcloud.net.cn/)做多端开发，或者使用微信官方提供的[Donut多端框架](https://dev.weixin.qq.com/docs/framework)

### 微信扫码体验
![小程序码](https://dev.zyworks.top/mpcode.jpg)

### 关注我
公众号/bilibili：初心正圆
