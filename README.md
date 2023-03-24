模拟叫号，完美还原银行叫号机

### 部署
1.[下载语音包](https://github.com/ch98196/NumberCalling/releases/download/resource/audio.zip)部署到CDN、对象存储等（推荐[多吉云](https://www.dogecloud.com/)，实名认证就有每月免费额度）

2.clone整个仓库，然后导入`微信开发者工具`（啥？你说你还没注册小程序？快去注册啦！[直通车](https://mp.weixin.qq.com/)）

3.将`pages/index/index.js`第97行的`[your domain]`替换为你的域名（注意在小程序后台`开发管理—开发设置`添加业务域名，并申请SSL证书以支持https访问；当然，你也可以每月19.9元的价格使用[微信云开发](https://cloud.weixin.qq.com/cloudbase)，无需域名）

4.编译、运行、发布

### 二开指南
1.目前只能按数字读（如`123`读作“一二三”，而非“一百二十三”），你可以在`index.js`中增加这样的逻辑

2.界面采用了[WEUI](https://github.com/Tencent/weui-wxss)，你可以使用其他的开源组件库，或者自己设计其他的UI

3.你还可以将其改造为[uniapp](https://uniapp.dcloud.net.cn/)做多端开发，或者使用微信官方提供的[Donut多端框架](https://dev.weixin.qq.com/docs/framework)

### 扫码体验
![小程序码](https://dev.zyworks.top/mpcode.jpg)

> 如果图片未显示，请前往微信搜一搜`正圆模拟叫号`体验

### 关注我可以吗 ~
当然可以！公众号/bilibili：初心正圆（微博也有，但只用来看别人发）

别的平台不去（因为太烂），谨防假冒！
