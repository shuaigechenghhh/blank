Component({
  mixins: [],
  data: {
    tasklist: [{
      title: '收藏人人租机小程序',
      received: false,
      coin: '30'

    }, {
      title: '进行实名认证',
      received: false,
      coin: '30'
    }],
    todaytaskList:[{
      title: '逛一逛活动页',
      received: false,
      coin: '30'
  
  }, {
      title: '逛一逛生活号首页',
      received: false,
      coin: '30'
  }
  ],
  cion:'30',
  hasNotice:false,
  },
  props: {
    isShow: false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleClose() {
      this.$page.onclose()
    },
    handleNotice(e){
      let {received,cion}=e.target.dataset.item
      let {type,index}=e.target.dataset
      if(!received){
        this.handelShowNotice(cion)
        if(type==1){
          let newList =this.data.todaytaskList
          newList[index].received=true
          this.setData({
            todaytaskList:newList
          })
        }else{
          let newList =this.data.tasklist
          newList[index].received=true
          this.setData({
            tasklist:newList
          })
        }
      }
    },
    handelShowNotice(cion){
      this.setData({
        hasNotice:true,
        cion:cion
      })
      setTimeout(()=>{
        this.setData({
          hasNotice:false,
        })
      },1000)
    }
  },
});