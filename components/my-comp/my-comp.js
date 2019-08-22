// components/my-comp/my-comp.js
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
    //title: String,
    title: {
      type: String,
      value: '默认值',
      observers: function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },
    tab: Array,
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    currentIndex: 0,
    compNum: 10
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNum(){
      this.triggerEvent('addEvent',{name: '自定义组件传递参数'})
    },
    getTab(event){
      var index = event.target.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('getTabVal',{index:index,item:this.properties.tab[index]})
    },
    //与页面组件约定一个方法调用
    changeCompNum(num){
      this.setData({
        compNum: this.data.compNum + num
      }) 
    },
  },
  options: {
    styleIsolation: 'apply-shared',
    multipleSlots: true, //多个插槽
  }
})
