<template>
  
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
            @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
</v-list>
</v-navigation-drawer>
<v-toolbar class="elevation-0" app absolute clipped-left>
  <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
  < <router-link to="/">Med&nbsp;Count</router-link>
    <v-text-field solo-inverted flat label="Search" prepend-icon="search" light></v-text-field>
    <v-spacer></v-spacer>
</v-toolbar>


</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [{
          icon: 'calendar_view_day',
          text: 'List'
        },
        {
          icon: 'playlist_add_check',
          text: 'Count'
        },
        {
          divider: true
        },
        {
          heading: 'Create New'
        },
        {
          icon: 'recent_actors',
          text: 'New CT'
        },
        {
          icon: 'library_add',
          text: 'New Med'
        },
        {
          divider: true
        },
        {
          heading: 'Lists'
        },
        {
          icon: 'library_books',
          text: 'List Meds'
        },
        {
          icon: 'local_pharmacy',
          text: 'Pharmacy List'
        },
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 300;
  }
</style>