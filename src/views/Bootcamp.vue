<template>
  <v-content class="ma-0 accent">
    <v-row align="start" justify="start">
      <v-col
        cols="12"
        class="shrink"
        md="4"
        v-for="(item, index) in bootcamps.slice((page - 1) * 20, page * 20)"
        :key="index"
      >
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card class="mx-2 secondary" :elevation="hover ? 16 : 2" link height="400">
            <div class="label" v-if="item.label != null && item.label != ''">{{ item.label }}</div>
            <v-img :src="item.picture_url" height="160"></v-img>
            <v-card-title>
              <div class="col-12 text-truncate">
                {{ item.name }}
              </div>
            </v-card-title>
            <v-card-subtitle>
              <v-row justify="space-between">
                <p class="ml-6" v-if="item.level == 3">中级</p>
                <p class="ml-6" v-if="item.level < 3">初级</p>
                <p class="ml-6" v-if="item.level > 3">高级</p>
                <p class="mr-3">{{ item.comments_count }}次评价</p>
              </v-row>
              <div class="row">
                <div class="col-12 text-truncate">
                  {{ item.description }}
                </div>
              </div>
            </v-card-subtitle>

            <div class="text-center red--text mb-2">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-1 v-card--reveal white--text"
                  style="height: 20%"
                >
                  <h2>
                    <span v-if="item.price == item.real_price"> ￥{{ item.price / 100 }} </span>
                  </h2>

                  <span v-if="item.price != item.real_price">
                    <h2 class="d-inline-flex">￥{{ item.real_price / 100 }}</h2>
                    <span style="text-decoration: line-through">
                      <h4 class="d-inline-flex">￥{{ item.price / 100 }}</h4></span
                    >
                  </span>
                  <h2
                    class="d-inline-flex"
                    style="border-left: solid 2px; margin-left: 10px; padding-left: 10px"
                  >
                    立即查看
                  </h2>
                </div>
              </v-expand-transition>
              <h2>
                <span v-if="item.price == item.real_price"> ￥{{ item.price / 100 }} </span>
              </h2>

              <span v-if="item.price != item.real_price">
                <h2 class="d-inline-flex">￥{{ item.real_price / 100 }}</h2>
                <span style="text-decoration: line-through">
                  <h4 class="d-inline-flex">￥{{ item.price / 100 }}</h4></span
                >
              </span>
            </div>

            <p class="text-center red--text">高级会员免费</p>
          </v-card>
        </v-hover>
      </v-col> </v-row
    >"
    <v-pagination
      :length="length1"
      v-model="page"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      light
      prop
      circle
    >
    </v-pagination>
  </v-content>
</template>

<script>
export default {
  name: 'Bootcamp',
  data() {
    return {
      bootcamps: [],
      length1: 0,
      page: 1
    }
  },

  created() {
    this.axios.get('/api/bootcamps').then((res) => {
      console.log(res.data)
      console.log(res.data.data)
      this.bootcamps = res.data.data
      this.length1 = res.data.data.length / 20
      console.log(this.length1)
    })
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: 0.5; */
  position: absolute;
  width: 100%;
}
.label {
  position: absolute;
  padding: 0 10px;
  height: 22px;
  background-color: #ff7b47;
  left: -10px;
  z-index: 1000;
  border-bottom-right-radius: 4px;
}
.label::before {
  content: '';
  widows: 0;
  height: 0;
  border: 7px solid transparent;
  border-top-color: #a7502d;
  position: absolute;
  top: 15px;
  left: 3px;
  transform: rotate(-135deg);
}
</style>
