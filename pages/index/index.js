//getApp()获取App()产生的示例对象
var app = getApp();
console.log(app.globalData.name)


// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'world',
    count: 0,
    users: [],
    img: '',
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
  getUserInfo(event){
    console.log(event)
  },
  addImage(){
    wx.chooseImage({
      success: (res) => {
        console.log(res.tempFilePaths[0])
        this.setData({
          img: res.tempFilePaths[0]
        })
      },
    })
  },
  imageLoad(){
    console.log('图片加载完成了');
  },
  bindinput(event){
    console.log('正在输入内容',event)
  },
  bindfocus(event) {
    console.log('input获得焦点时', event)
  },
  bindblur(event) {
    console.log('input失去焦点时', event)
  },
  scrollToupper(event) {
    console.log('滚动到头部或者左边时',event)
  },
  scrollTolower(event) {
    console.log('滚动到底部或者右边时',event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    wx.request({
      url: 'http://localhost:3000/users',
      success: (res) => {
        console.log(res)
        this.setData({
          users: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
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
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面到达底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享')
  }
})