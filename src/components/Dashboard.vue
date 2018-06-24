<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">      
  <v-card xs12 sm6 class="primary">
    <v-card-title>
      <img src='https://coastlinerehabcenters.com/wp-content/uploads/2018/06/coastline-behavioral-health.png' width="125px" alt="Coastline Behavioral Health">
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        dark            
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="clients"
      :search="search"
      item-key="id"
    >
    <template slot="items" slot-scope="props">
    
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.first_name }}</td>    
        <td class="text-xs-right">{{ props.item.house }}</td>
        <td class="text-xs-right">{{ props.item.house_mgr }}</td>
        <td class="text-xs-right">{{ props.item.client_id }}</td>
      </tr>
      </template>
<v-alert slot="no-results" :value="true" color="error" icon="warning">
  Your search for "{{ search }}" found no results.
</v-alert>

<template slot="expand" slot-scope="props">
<v-layout v-for="med in meds" :key="id" v-if="props.item.client_id == med.client_id">     
 <v-flex align-content-center justify-center class="caption text-xs-center">
  <v-btn sm left flat absolute :to="{name: 'count', params: {med_id: med.med_id}}"><v-icon color="success">format_list_numbered_rtl</v-icon></v-btn>
    <v-btn sm icon right absolute :to="{name: 'edit-med', params: {med_id: med.med_id}}"><v-icon color="primary">edit</v-icon></v-btn>
    <v-badge left overlap>
      <span slot="badge">{{ med.count_initial }}</span>
      <span><v-icon color="accent">format_list_numbered_rtl</v-icon>Rx#:{{ med.script_num }} "{{ med.med_gen_name }}"</span>
    </v-badge>
    

     
    <p class="caption text-xs-center">CT NAME: {{ med.ct_name }} - ID: {{ med.client_id }}</p> 

</v-flex>
  </v-layout>
</template>
</v-data-table>
</v-card>

</v-slide-y-transition>
</v-container>
</template>


<script>
  import db from './firebaseInit'
  import Popover from './Popover'
  import SpeedDial from './SpeedDial'
  export default {
    name: 'dashboard',
    components: {
      Popover,
      SpeedDial
    },
    data() {
      return {
        search: '',
        selected: [],
        headers: [{
            text: 'First Name',
            align: 'left',
            sortable: true,
            value: 'first_name'
          },
          {
            text: 'House',
            align: 'right',
            value: 'house'
          },
          {
            text: 'House Manager',
            align: 'right',
            value: 'house_mgr'
          },
          {
            text: 'Client ID',
            align: 'right',
            value: 'med_id'
          }
        ],
        meds: [],
        clients: []
      }
    },
    //get med collection    
    created() {
      db.collection('meds').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'med_id': doc.data().med_id,
            'client_id': doc.data().client_id,
            'ct_name': doc.data().ct_name,
            'script_num': doc.data().script_num,
            'med_gen_name': doc.data().med_gen_name,
            'med_brand_name': doc.data().med_brand_name,
            'count_initial': doc.data().count_initial,
            'count_timestamp': doc.data().count_timestamp,
            'fill_date': doc.data().fill_date
          }
          this.meds.push(data)
        })
      })
      //--get clients collection
      db.collection('clients').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'client_id': doc.data().client_id,
            'med_id': doc.data().med_id,
            'first_name': doc.data().first_name,
            'last_name': doc.data().last_name,
            'house': doc.data().house,
            'house_mgr': doc.data().house_mgr
          }
          this.clients.push(data)
        })
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {}
</style>