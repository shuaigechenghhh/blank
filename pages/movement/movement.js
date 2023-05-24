Page({
  data: {
    isShow: false,
    bubbleList: [{
        text: '支付成功',
        received: false,
        position:'fisrt'
      },
      {
        text: '运动步数',
        received: false,
        position:''
      },
      {
        text: '支付成功',
        received: false,
        position:'center'
      }, {
        text: '运动步数',
        received: false,
        position:''
      },
      {
        text: '支付成功',
        received: false,
        position:'last'
      }
    ]
  },
  onLoad() {},
  hangleShop() {
    my.navigateTo({
      url: '/pages/shop/shop'
    })
  },
  hangleToNotice() {
    my.navigateTo({
      url: '/pages/noticeList/noticeList'
    })
  },
  onclose() {
    this.setData({
      isShow: false
    })
  },
  handleShow() {
    this.setData({
      isShow: true
    })
  },
  handleBubble(e){
    let index=e.target.dataset.index
    let newList =this.data.bubbleList
    newList[index].received=true
    this.setData({
      bubbleList:newList
    })
  }

});