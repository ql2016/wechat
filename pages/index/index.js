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
    price: 5.678,
    items: ['aa','bb','cc'],
    customName: '',
    num: 0,
    linkData: '通过跳转页面改变这里的数据'
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
  addEvent(event){
    console.log(event)
    this.setData({
      customName: event.detail.name,
      num: this.data.num + 1
    })
  },
  getTabVal(event){
    console.log(event.detail.index,event.detail.item)
  },
  /* touch */
  touchStart(event){
    console.log('touchstart',event);
  },
  touchMove(){
    console.log('touchmove');
  },
  touchEnd(event){
    console.log('touchend,',event);
  },
  tap(){
    console.log('tap');
  },
  longpress(){
    console.log('longpress');
  },
  outerTap(event){
    console.log('outerTap',event)
  },
  innerTap(event) {
    console.log('innerTap', event)
  },
  getIndex(event){
    var dataSet = event.currentTarget.dataset;
    console.log(dataSet.index,dataSet.item);
  },
  //改变组件内的数据
  changeComNum(){
    var sel = this.selectComponent('.sel');
    console.log(sel);
    // sel.setData({
    //   compNum: sel.data.compNum + 10
    // })
    sel.changeCompNum(10)
  },
  //页面跳转
  skipDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=哈哈&age=20',
    })
  },
  /** 事件捕获和冒泡 */
  handleTap1(){
    console.log('handleTap1');
  },
  catchTap1() {
    console.log('catchTap1');
  },
  handleTap2() {
    console.log('handleTap2');
  },
  catchTap2() {
    console.log('catchTap2');
  },
  handleTap3() {
    console.log('handleTap3');
  },
  catchTap3() {
    console.log('catchTap3');
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
    return {
      title: '我的小程序',
      path: 'pages/my/my',
      imageUrl: '../../assets/tabbar/cart.png'
    }
  },

  //showToast
  showToast(){
    wx.showToast({
      title: 'toast提示',
      icon: 'loading',
      duration: 5000,
      image: '../../assets/tabbar/report_selected.png',
      success: function(){
        console.log('showToast')
      }
    })
  },
  //showModal
  showModal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      //showCancel: true,
      cancelText: '否',
      cancelColor: 'red',
      confirmText: '是',
      confirmColor: 'blue',
      success: function(res){
        if(res.confirm){
          console.log('用户点击了是');
        }
        if(res.cancel){
          console.log('用户点击了否');
        }
      }
    })
  },
  //showLoading
  showLoading(){
    wx.showLoading({
      title: '加载中',
      success: function(res){
        setTimeout(function(){
           wx.hideLoading();
        },1000)
      }
    })
  },
  //showActionSheet
  showAction(){
    wx.showActionSheet({
      itemList: ['保存','继续编辑'],
      success: function(res){
        console.log(res.tapIndex)
      }
    })
  }
})