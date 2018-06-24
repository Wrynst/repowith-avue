/* eslint-disable */
<template>
    <div class="drug-search">
        <h2>Drug Search</h2>
    </div>
    
</template>

<script>
  import axios from 'axios'

  const fdaKey = '6SY24ZHwRybZ0p7xx8nutpTixTmIynIu6JPyLoXE'
  const apiURL = 'https://api.fda.gov/drug/label.json?api_key='
  const testApi = 'https://api.fda.gov/drug/event.json?limit=1'
  var sRslts = '&limit5'
  var sFld = 'generic_name'
  var sTerm = 'codine'
  
  export default {
    name: 'drug-search',
    data() {
      return {
        
      }
      
    },
    methods: {
      
    },
    created(){
      axios.get(testApi)
      .then(response => {
        console.log(response)
      })
    }
  }  
</script>