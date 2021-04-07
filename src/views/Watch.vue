<template>
  <v-content class="ma-0">
    <v-toolbar color="cyan" elevation="12">
      <h2>Watch监听器</h2>
    </v-toolbar>
    <v-row class="ma-2">千米：<input type="text" v-model="kilometers" class="cyan"/></v-row>
    <v-row class="ma-2">米：<input type="text" v-model="meters" class="cyan"/></v-row>
    <!-- //firstName -->
    <v-row class="ma-2 pa-6">
      <label for="firstName">firstName:</label>
      <input type="text" v-model="firstName" id="firstName" class="cyan" />
      <label for="firstName">lastName:</label>
      <input type="text" v-model="lastName" id="lastName" class="cyan" />
      <h2>fullName: {{ fullName }}</h2>
    </v-row>
    <!-- //监听对象属性 -->
    <v-row class="ma-2 pa-6">
      <label for="firstName">firstName:</label>
      <input type="text" v-model="player.firstName" id="firstName" class="cyan" />
      <label for="firstName">lastName:</label>
      <input type="text" v-model="player.lastName" id="lastName" class="cyan" />
      <h2>fullName: {{ player.fullName }}</h2>
    </v-row>
    <!-- //深度监听 -->
    <v-row class="ma-2 pa-6">
      <label for="firstName">firstName:</label>
      <input type="text" v-model="info.player1.firstName" id="firstName" class="cyan" />
      <label for="firstName">lastName:</label>
      <input type="text" v-model="info.player1.lastName" id="lastName" class="cyan" />
      <h2>fullName: {{ info.player1.fullName }}</h2>
    </v-row>
    <!-- //监听其中一个 -->
    <v-row class="ma-2 pa-6">
      <label for="firstName">firstName:</label>
      <input type="text" v-model="player.firstName" id="firstName" class="cyan" />
      <label for="firstName">lastName:</label>
      <input type="text" v-model="player.lastName" id="lastName" class="cyan" />
      <h2>fullName: {{ player.fullName }}</h2>
    </v-row>
    <v-row class="ma-2 pa-6">
      <my-button @my-click="show($event)"></my-button>
    </v-row>
  </v-content>
</template>

<script>
import MyButton from '../components/MyButton'
export default {
  name: 'Watch',
  components: {
    MyButton
  },
  data() {
    return {
      kilometers: 0,
      meters: 0,
      firstName: '',
      lastName: '',
      fullName: '',
      info: {
        player1: {
          firstName: '',
          lastName: '',
          fullName: ''
        }
      },
      player: {
        firstName: '',
        lastName: '',
        fullName: ''
      }
    }
  },
  watch: {
    kilometers: function(val) {
      this.meters = val * 1000
    },
    firstName: {
      //监听器的标准语法
      handler(newVal, oldVar) {
        //两个参数可省，表示监听的属性firstName变化之后，之前的值
        console.log(newVal + '-----------' + oldVar)
        this.fullName = this.firstName + '  ' + this.lastName
      }
    },
    //简写语法格式
    lastName: function() {
      this.fullName = this.firstName + '  ' + this.lastName
    },
    // 监听对象属性
    info: {
      //当player的任意属性值发生变化，handler方法都会被调用
      handler(newVal, oldVar) {
        console.log(newVal + '-----------' + oldVar)
        this.info.player1.fullName = newVal.player1.firstName + '  ' + newVal.player1.lastName
      },
      // 立刻触发
      immediate: true,
      // 深度监听，监听到对象属性的变化
      deep: true
    },
    // 监听对象的某个属性
    'player.firstName': function() {
      console.log('player.firstName发生变化')
      this.player.fullName = this.player.firstName + '  ' + this.player.lastName
    }
  },
  methods: {
    show(event) {
      console.log(event)
      console.log(event.srcElement.currentSrc)
      // console.log(event.srcElement.currentSrc)
    }
  }
}
</script>

<style></style>
