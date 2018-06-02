## 这是一个微信小程序的demo
- 用于熟悉文档。

## 基础配置
### tabBar
### app.json
## ZanUI
### 使用bower安装
### 两种组件引用Demo
#### 正常引用
#### API类组件
### cell使用（在个人中心）
## MOCKJS
### 域名校验
#### 跳过域名校验
#### 在微信后台配置服务器域名
```
easymocktest() {
    wx.request({
      url: "https://www.easy-mock.com/mock/5b10be753a1a393db33d4109/electronic-sign/test",
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.data)
      }
    })
  },
```
```
easymocktest() {
    wx.request({
      url: "https://www.easy-mock.com/mock/5b10be753a1a393db33d4109/electronic-sign/testpost",
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data.data)
      }
    })
  },
```

## 上传数据
- 目前只能进行图片上传


## 常见问题
### 数据绑定提示this.setData is not a function
由于闭包， 无法直接通过this来setData  
解决方法：  
我们通过将当前对象赋给一个新的对象  

var _this = this;  

然后使用_this 来setData就行了  
```
doCalc:function(){
    var _this = this;
    wx.request({
      url: url,
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code == 0){
          _this.setData({
            maxCount: res.data.maxCount
          });
        }
      }
    })
  }
```

### 数据绑定不成功
解决方法：只能使用SetData()绑定数据