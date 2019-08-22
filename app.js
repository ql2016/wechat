/*
app.js主要做的工作：
1. 判断小程序的进入场景，常见的打开场景--群聊会话中打开、小程序列表中打开、微信扫一扫打开、另一个小程序打开
2. 监听生命周期函数，在生命周期中执行对应的业务逻辑，比如在某个生命周期函数中获取微信用户的信息
3. 因为App()实例只有一个，并且是全局共享的（单例对象），可以将一些共享数据放在这里
*/
App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    var token = wx.getStorageSync('TOKEN');
    if(token && token.length){
      this.check_token(token);
    }else {
      this.login();
    }
  },
  login(){
    console.log('22222')
    //1.获取code
    wx.login({
      success: (res) => {
        var code = res.code;
        //2.向自己的服务器发送请求，获取token
        wx.request({
          url: '',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            var token = res.data.token;
            this.globalData.token = token;//把token存储在全局变量里
            wx.setStorage({
              key: TOKEN,
              data: token,
              success: (res) => {

              }
            })
          }
        })
      }
    })
  },
  check_token(token){
    wx.request({
      url: '',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          this.globalData.token = token
        }else {
          this.login()
        }
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //1. 判断小程序的进入场景
    console.log(options)
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    //2. 获取用户信息
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    name: 'fsfs',
    age: 20
  }
})
