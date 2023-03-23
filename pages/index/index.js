Page({
    data: {
        number: '',
        window: '',
        array1: ['国语', '粤语'],
        value1: 0,
        value2: true,
        playing: false,
        playList: []
    },

    bindPickerChange(e) {
        this.setData({
            value1: e.detail.value,
        });
    },

    bindSwitchChange(e) {
        this.setData({
            value2: e.detail.value,
        });
    },

    bindNumberChange(e) {
        this.setData({
            number: e.detail.value,
        });
    },

    bindWindowChange(e) {
        this.setData({
            window: e.detail.value,
        });
    },

    call() {
        if (this.data.number.length < 1 || this.data.window.length < 1) {
            wx.showToast({
                title: '参数不得为空',
                icon: 'error'
            })
        } else if(!(/(^[A-Za-z0-9]+$)/.test(this.data.number)) || !(/(^[0-9]+$)/.test(this.data.window))){
            wx.showToast({
                title: '无效参数',
                icon: 'error'
            })
        } else {
            this.setData({
                playing: true
            })

            // 数据处理，包括去除空格、统一大写、拆字、播放列表生成
            var number = this.data.number.replace(/\s*/g, "").toUpperCase().split("")
            var window = this.data.window.replace(/\s*/g, "").toUpperCase().split("")

            const please = ['please']
            const bell = ['bell']

            var playList = please.concat(number, 'to', window, 'window');

            // 叫号语言控制
            var lan
            if (this.data.value1 == 0) {
                lan = 'G'
            } else {
                lan = 'YY'
            }

            var i, len = playList.length;
            for (i = 0; i < len; i++) {
                playList[i] = `${lan}${playList[i]}`
            }

            // 提示音控制
            if (this.data.value2 == true) {
                var newPlayList = bell.concat(playList)
                this.setData({
                    playList: newPlayList
                })
            } else {
                this.setData({
                    playList: playList
                })
            }
            console.log(this.data.playList)

            // 播放
            this.player(0)
        }
    },

    // 播放方法 需基础库 >= 1.6.0
    player(n) {
        let innerAudioContext = wx.createInnerAudioContext({
            useWebAudioImplement: true
        })
        innerAudioContext.src = `https://[your domain]/${this.data.playList[n]}.wav`  // 此处填入你的域名
        innerAudioContext.play();

        innerAudioContext.onEnded(() => {
            if (n < this.data.playList.length - 1) {
                let that = this
                if (this.data.value1 == 0){
                    setTimeout(function () {
                        that.player(n + 1);
                    }, 50)
                } else {
                    setTimeout(function () {
                        that.player(n + 1);
                    }, 25)
                }
            } else {
                innerAudioContext.destroy()
                this.setData({
                    playing: false
                })
                wx.showToast({
                    title: '叫号完成',
                })
            }

        })

    }
})
