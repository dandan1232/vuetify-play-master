<template>
  <!-- 这里就是动态样式绑定，给 borderRadius（css中的 border-radius） 绑定一个样式就行了  borderRadius-->
  <img
    :style="{ width: size, borderRadius: borderRadius }"
    src="http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/md/20210129161044.jpg"
    @click="show($event)"
    class="image"
  />
</template>
<script>
export default {
  name: 'MyButton',
  data() {
    return {
      // 控制图片的圆润度
      borderRadius: '50%'
      // pic1: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/01.jpg'
      // pic2: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/02.jpg'
    }
  },
  props: {
    // //小按钮
    // small: {
    //   type: Boolean,
    //   default: false
    // },
    // //大按钮
    // large: {
    //   type: Boolean,
    //   default: false
    // },
    // //是否禁用
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // //将按钮指定为 floating-action-button
    // fab: {
    //   type: Boolean,
    //   default: false
    // },
    // // 固定定位
    // fixed: {
    //   type: Boolean,
    //   default: false
    // },
    // //将按钮扩展到可用空间的 100％
    // block: {
    //   type: Boolean,
    //   default: false
    // },
    // //是否启用dark模式
    // dark: {
    //   type: Boolean,
    //   default: false
    // },
    //背景色
    color: {
      type: String,
      default: '#00bcd4'
    },
    size: {
      type: String,
      default: '200px'
    }
  },
  methods: {
    //handleClick(event) {
    // console.log(event.target.innerHTML)
    // console.log(event.currentTarget.innerHTML)
    //触发父组件方法,同时传递按钮文本内容,随机整数
    // let name = event.target.innerHTML
    // let number = Math.ceil(Math.random() * 100)
    // this.$emit('my-click', name, number)
    //
    //}
    /**
     * 点击事件
     */
    show(event) {
      console.log(event)
      // 改变 那个 变量的值
      if (this.borderRadius == 0) {
        this.borderRadius = '50%'
      } else {
        this.borderRadius = 0
      }

      // alert('查看此图片')

      this.$emit('my-click', event)
    }
  }
}
</script>
<style type="scss" scoped>
/* button {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500; */
/* 行距 */
/* letter-spacing: 0.08em;
  justify-content: center;
  outline: 0;
  position: relative; */
/* 文本下滑线 */
/* text-decoration: none;
  min-width: 80px;
  height: 35px;
  padding: 3px;
  font-size: 13px;
} */

.image {
  height: 190px;
  /* 这里放个动画效果就行了， 好了就这样了把？？？？？好的谢谢 */
  transition: all 0.2s ease;
}
/* .small {
  min-width: 60px;
  height: 30px;
  font-size: 12px;
}
.large {
  min-width: 100px;
  height: 40px;
  font-size: 14px;
}
.block {
  display: flex;
  flex: 1 0 auto;
  min-width: 100% !important;
}
.fab {
  min-width: 48px;
  max-width: 48px;
  height: 48px;
  border-radius: 100%;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: box-shadow, opacity;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.dark {
  background-color: rgba(0, 0, 0, 0.12);
  color: #fff;
}
.fixed {
  position: fixed;
  right: 20px;
  bottom: 20px;
} */
</style>
