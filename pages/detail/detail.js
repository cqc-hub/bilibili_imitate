// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:[],
    othersList:[],
    commentData:{}
  },
  getOthersList(videoId){
    let that=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id='+videoId,
      success: function(res){
        // success
        // console.log(res);
        if(res.data.code===0){
          console.log(res.data.data.othersList);
          that.setData({
            othersList:res.data.data.othersList
          })
        }}})},
  getCommentList(videoId) {
    let that = this;
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/commentList?id=" + videoId,
      success(res) {
        // console.log(res);
        if (res.data.code == 0) {
          console.log(res.data.data.commentData);
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
  },

  getCurrentVideoId(videoId){
    const _this=this
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/videoDetail?id="+videoId,
      success(res){
        if (res.data.code==0){
          _this.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId=options.id
    this.getCurrentVideoId(videoId)
    this.getOthersList(videoId)
    this.getCommentList(videoId)
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