import {
  getHomeMultiData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]
  },
  _getMultiData(options){
    getHomeMultiData(options).then(res => {
      console.log(res)
      const banners = res[0].banner.map(item=>{
        return item.image
      })
      this.setData({
        banners:banners,
        recommends: res[0].recommend
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMultiData(options)
  },

})