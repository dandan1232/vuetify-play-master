<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
      height="100"
      src="../assets/img/3.jpg"
      shrink-on-scroll
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>亦安、</v-toolbar-title>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(236,97,145,.7), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <div class="mt-1">
        <v-avatar>
          <v-img src="../assets/img/avatar/mine.jpg"></v-img>
        </v-avatar>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="grey">mdi-flash-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="red ">mdi-heart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      color="secondary"
      :mini-variant.sync="mini"
      class="elevation-12"
    >
      <v-list dense>
        <v-list-item link @click="$router.push('/')">
          <v-list-item-action>
            <v-icon @click.stop="mini = !mini">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/components">
          <v-list-item-action>
            <v-icon>mdi-at</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Components</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/todo">
          <v-list-item-action>
            <v-icon>mdi-apple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TodoList</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/bootcamp">
          <v-list-item-action>
            <v-icon>mdi-tag-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Bootcamp</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/github">
          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/form">
          <v-list-item-action>
            <v-icon>mdi-sort-numeric-descending-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Form</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/watch">
          <v-list-item-action>
            <v-icon>mdi-alarm-light</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Watch</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      ><v-container fluid color="primary"><router-view /></v-container>
    </v-main>

    <v-footer app color="primary" height="80">
      <v-row class="d-flex" justify="center" align="center">
        <h4>&copy; 2021</h4>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    show: false,
    mini: false
  }),
  created() {
    this.$vuetify.theme.dark = false
  }
}
</script>
