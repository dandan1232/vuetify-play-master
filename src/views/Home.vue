<template>
  <v-row align="start" justify="start">
    <v-col cols="12" class="shrink" md="4" v-for="(img, index) in imgs" :key="index">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card class="mx-auto secondary" dark :elevation="hover ? 16 : 2" link>
          <v-img :src="require('../assets/img/avatar/' + img)" height="220"></v-img>
          <v-card-title>
            Western road trips
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text color="accent">Share</v-btn>
            <v-btn color="accent" text>
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
  created() {}
}
</script>
