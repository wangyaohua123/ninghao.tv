App({
    onLaunch(options) {
        console.log('初始化')
        console.log(options)
    },
    onShow(options) {
        console.log('显示')
        console.log(options)
    },
    onHide(options) {
        console.log('隐藏')
        console.log(options)
    },
    onError() {
        console.log('error')
    },
    globalData: {
greeting: 'hello，您好',
greet: '10月4号，星期四',
headering: '26℃'
    }
})