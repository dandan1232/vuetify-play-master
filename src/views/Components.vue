<template>
  <v-content class="ma-0">
    <v-row class="ma-2">
      <v-col cols="12" md="3">
        <my-button color="pink" fab fixed @my-click="handleClick">
          <v-icon slot="suffix-icon" color="red">mdi-heart</v-icon>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button disabled dark>
          <span>按钮2</span>
          <v-icon slot="suffix-icon" color="white">mdi-home</v-icon>
        </my-button>

        <v-spacer class="mt-6"></v-spacer>
        <my-button color="orange" small @click.native="handleClick">
          <i>按钮3</i>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button color="#ccc" large @my-click="handleClick">
          <v-icon slot="pre-icon">mdi-apple</v-icon>
          <span>按钮4</span>
          <v-icon slot="suffix-icon">mdi-apple</v-icon>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button color="purple" dark large block>
          <span>按钮5</span>
        </my-button>
      </v-col>
    </v-row>

    <v-row class="ma-2">
      {{ gender }}
      <v-col cols="12" md="3">
        <input id="male" type="radio" v-model="gender" value="male" />
        <label for="male">男</label>
        <input id="fwmale" type="radio" v-model="gender" value="female" />
        <label for="female">女</label>
      </v-col>

      <v-col cols="12" md="3">
        <h3>{{ hobbies }}</h3>
        <input id="1" type="checkbox" v-model="hobbies" value="games" />
        <label for="1">打游戏</label>
        <input id="2" type="checkbox" v-model="hobbies" value="eat" />
        <label for="2">吃</label>
        <input id="3" type="checkbox" v-model="hobbies" value="basketball" />
        <label for="3">打篮球</label>
        <input id="4" type="checkbox" v-model="hobbies" value="music" />
        <label for="4">听音乐</label>
      </v-col>

      <v-col cols="12" md="3">
        <h3>{{ hobbies }}</h3>
        <select v-model="hobbies" multiple class="my-select">
          <option value="games">games</option>
          <option value="eat">eat</option>
          <option value="basketball">basketball</option>
          <option value="music">music</option>
        </select>
      </v-col>
      <v-col cols="12" md="3"></v-col>
    </v-row>
    <!-- <h3 v-if="show">{{ app.userName }}</h3> -->
    <div id="app">
      <input type="text" v-model.lazy="name" />
      <h2>NBA球星：{{ name }}，类型：{{ typeof name }}</h2>
      <input type="text" v-model.number="age" />
      <h2>年龄：{{ age }},类型：{{ typeof age }}</h2>
      <input type="text" v-model.trim="brief" />
      <h2>简介：{{ brief }}</h2>
    </div>

    <v-card color="secondary pa-10" height="400">
      <v-row class="mb-6">
        <label for="firstName">firstName:</label>
        <input type="text" id="firstName" v-model="firstName" class="white mr-6" />
      </v-row>

      <v-row class="mb-6">
        <label for="lastName">lastName:</label>
        <input type="text" id="lastName" v-model="lastName" class="white mr-6" />
      </v-row>
      <v-row class="mb-6">
        <h3>函数调用得到的fullName:{{ getFullName() }}</h3>
      </v-row>

      <v-row class="mb-6">
        <h3>计算属性得到的fullName:{{ fullName }}</h3>
      </v-row>

      <div id="app">
        <label for="fullName">fullName:</label>
        <input type="text" v-model.lazy.trim="fullName" id="fullName" class="white mr-6" />
        <h2>firstName是: {{ firstName }}</h2>
        <h2>lastName: {{ lastName }}</h2>
      </div>
    </v-card>
  </v-content>
</template>

<script>
import MyButton from '../components/MyButton'

export default {
  inject: ['app'],
  name: 'Components',
  data() {
    return {
      gender: 'female',
      hobbies: ['basketball'],
      name: '',
      age: null,
      brief: '',
      firstName: '',
      lastName: ''
    }
  },
  components: {
    MyButton
  },
  created() {},
  methods: {
    handleClick(name, number) {
      console.log(`子组件传递参数>>>>>>${name}    ${number}`)
    },
    getFullName() {
      console.log('函数进入了。')
      return this.firstName + ' ' + this.lastName
    }
  },
  computed: {
    fullName: {
      get() {
        console.log('进入计算属性了~~~')
        return this.firstName + ' ' + this.lastName
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
    // demo: function() {
    //   return this.firstName + ' hellohello'
    // }
  }
}
</script>

<style scoped lang="scss"></style>
