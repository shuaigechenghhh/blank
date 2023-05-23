Page({
  data: {
    isShow:false
  },
  onLoad() {},
  hangleShop(){
    my.navigateTo({
      url: '/pages/shop/shop'
  })
  },
  hangleToNotice(){
    my.navigateTo({
      url: '/pages/noticeList/noticeList'
  })
  },
  onclose(){
    this.setData({
      isShow:false
    })
  },
  handleShow(){
    this.setData({
      isShow:true
    })
  }

});
