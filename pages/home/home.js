// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   data0:''
  },

  easymocktest() {
    var _this = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/5b10be753a1a393db33d4109/wechat-data/test",
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        _this.setData({
          data0: res.data.data.hello
        })
        console.log(res.data)
      }
    })
  },
  uploadfile() {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://www.easy-mock.com/mock/5b10be753a1a393db33d4109/wechat-data/uploadtest', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            var s = JSON.parse(res.data)
            _this.setData({
              data0: s.data.status
            })
            console.log(s)
          
          }
        })
      }
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
  
  },
  
})