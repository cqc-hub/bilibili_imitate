Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  首页导航数据
    navList:[],
    currentIndex:0,
    swiperList:[]

  },

  navactive(e){
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  //获取导航数据
  getNavList(){
    //小程序内置发送请求方法
    const _this=this
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/navList",
      success(res){
        console.log(res);
        if (res.data.code==0){
          _this.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  getSwiperList(){
    //小程序内置发送请求方法
    const _this=this
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/swiperList",
      success(res){
        if (res.data.code==0){
          // console.log(res.data.data.swiperList);
          _this.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    this.getSwiperList()
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