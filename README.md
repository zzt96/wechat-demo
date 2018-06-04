## 这是一个微信小程序的demo
- 用于熟悉文档。

## 创建项目，基础配置
### tabBar
- 在app.json中配置，list是一个数组，里面需要配置跳转的路径，标题和icon
### app.json：
- 更多详细配置：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html
## ZanUI
- 使用文档：https://www.youzanyun.com/zanui/weapp#/zanui/layout/cell
### 使用bower安装
### 两种组件引用Demo
#### 正常引用
#### API类组件
### cell使用（在个人中心）
## MOCKJS
### 域名校验
#### 跳过域名校验
- 打开微信开发者工具，在详情中勾选最后一项：不校验....
#### 在微信后台配置服务器域名
- 在设置中的开发者设置-配置服务器域名（需经过ICP备案，不支持ip地址和端口号）
- https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=627405937&lang=zh_CN
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
- uploadFile

## 逻辑代码
- App()注册程序
- Page()注册页面
- 详情去官方文档，框架，逻辑层查看
- https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html

## 事件绑定
- 视图层到逻辑层的联系方式
- bindtap绑定事件
- page()实现逻辑
- 更多，包括冒泡事件和非冒泡事件https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

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
