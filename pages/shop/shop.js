Page({
  data: {
    shopList:[],
    bottomText:'没有更多了',
    hasPaging:true,
    hasBottomText:true,
    titleList:[
      '全部',
      '1-100',
      '100-1000',
      '1000-10000'
    ],
    currentIndex:0
  },
  onLoad() {
    this.init()
  },
  init(){
    this.getList()
  },
  getList(){
    let newlist=this.data.shopList
    let len=10
    let item={
      "cover": ["/uploads/imageUpload/2007/09/s/7hiAeYO5f06da2ed7492.jpg"],
      "id": 99,
      "imgOssServer": "https://img-t1.rrzuji.cn",
      "init_sell_num": 450,
      "is_free_shipping": 1,
      "need_coin": 1650,
      "need_pay": "0.00",
      "position_sign": "61ad74b6cef0b9b566c6134f9c8d3fac",
      "price": "26.00",
      "sell_num": 0,
      "sort": 9994,
      "tags": "新品",
      "target_id": "",
      "title": "便携式勺筷餐具套装",
      "total_num": 999,
      "type": 1
  }
    for(let i=0;i<len;i++){
      newlist.push(item)
    }
    setTimeout(()=>{
      this.setData({
        shopList:newlist,
        hasBottomText:false
      })
    },1000)
  },
  onScrollToLower(e){
    let hasPaging=this.data.hasPaging
    if(hasPaging){
      this.setData({
        bottomText:'加载中...',
        hasBottomText:true
      })
      this.getList()
    }else{
      this.setData({
        hasBottomText:true
      })
    }
  },
  handleClick(e){
    let index =e.target.dataset.index
    this.setData({
      currentIndex:index
    })
  }
});
