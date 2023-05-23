Page({
  data: {
    titleList:[{
      title: '活动公告',
      hasNotice: true
  }, {
      title: '订单消息',
      hasNotice: false
  }],
    currentTitle:0,
    noticeList:[ {
      title: '活动通知',
      time: '2020-03-23 14:30',
      hasRead: false,
      content: '恭喜获得20个租币，请查收',
      coin: '20'
  },
  {
      title: '活动通知',
      time: '2020-03-23 14:30',
      hasRead: true,
      content: '恭喜获得20个租币，请查收',
      coin: '20'
  },
  {
      title: '活动通知',
      time: '2020-03-23 14:30',
      hasRead: false,
      content: '恭喜获得20个租币，请查收',
      coin: '20'
  },],
  hasNotice:false,
  hasDetail:false,
  cion:"20"


  },
  onLoad() {},
  handleTabSwitch(e){
    console.log(222,e)
    let index =e.target.dataset.index
    this.setData({
      currentTitle:index
    })
  },
  handleDetele(){
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
  handleNotice(){
    let newList =this.data.noticeList.map((item)=>({...item,hasRead:false}))
    this.setData({
      hasNotice:true,
      noticeList:newList
    })
    setTimeout(()=>{
      this.setData({
        hasNotice:false
      })
    },1000)
  },
  handleDetail(){
    this.setData({
      hasDetail:true
    })
  },
  closeDetailModel(){
    this.setData({
      hasDetail:false
    })
  }
});
