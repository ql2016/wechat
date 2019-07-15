// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'world',
    count: 0,
    users: [
      { id: 1, name: 'luck' },
      { id: 2, name: 'merry' },
      { id: 3, name: 'lisa' }
    ]
  },
  addNum(){
    //this.data.count += 1; //界面数据不刷新
    this.setData({
      count: this.data.count + 1
    })
  },
  reduceNum(){
    this.setData({
      count: this.data.count - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})