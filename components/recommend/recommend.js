// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList:[
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'这是一段内容，这是一段内容，这是一段内容',
        imgSrc:["/images/cat.png"],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'这是一段内容，这是一段内容，这是一段内容',
        imgSrc:["/images/cat.png","/images/cat.png","/images/cat.png"],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      },
      {
        title: '这是一个标题',
        imgSrc:'url',
        username: '用户名',
        
        content:'这是一段内容，这是一段内容，这是一段内容',
        imgSrc:[],
        videoSrc:"/images/cat.png",
        
        views:44,
        goods:120,
  
      }
    ],
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})