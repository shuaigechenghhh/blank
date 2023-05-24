Page({
  data: {
    titleList: [{
      title: '活动公告',
      hasNotice: true
    }, {
      title: '订单消息',
      hasNotice: false
    }],
    currentTitle: 0,
    noticeList: [],
    hasNotice: false,
    hasDetail: false,
    cion: "20",
    bottomText:'没有更多了',
    hasPaging:false,
    hasBottomText:false
  },
  onLoad() {
    this.init()
  },
  onReachBottom() {
    let hasPaging=this.data.hasPaging
    if(hasPaging){
      this.setData({
        bottomText:'加载中...',
        hasBottomText:true
      })
      console.log('到底了')
      this.getList()
    }else{
      this.setData({
        hasBottomText:true
      })
    }
  },
  init() {
   this.getList()
  },
  getList(){
    const len = 10
    const newList = this.data.noticeList
    const item = {
      title: '活动通知',
      time: '2020-03-23 14:30',
      hasRead: false,
      content: '恭喜获得20个租币，请查收',
      coin: '20'
    }
    for (let i = 0; i < len; i++) {
      newList.push(item)
    }
    setTimeout(()=>{
      this.setData({
        noticeList:newList,
        hasBottomText:false
      })
    },1000)
  } ,
  handleTabSwitch(e) {
    let index = e.target.dataset.index
    this.setData({
      currentTitle: index
    })
  },
  handleDetele() {
    my.confirm({
      title: '是否要删除已读通知',
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
      success: (result) => {
        my.alert({
          title: `${result.confirm}`,
        });
      },
    });
  },
  handleNotice() {
    let newList = this.data.noticeList.map((item) => ({
      ...item,
      hasRead: false
    }))
    this.setData({
      hasNotice: true,
      noticeList: newList
    })
    setTimeout(() => {
      this.setData({
        hasNotice: false
      })
    }, 1000)
  },
  handleDetail() {
    this.setData({
      hasDetail: true
    })
  },
  closeDetailModel() {
    this.setData({
      hasDetail: false
    })
  },

});