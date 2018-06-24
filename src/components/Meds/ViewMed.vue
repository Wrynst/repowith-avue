<template>
    <div class="view-med">
        <h2>View Med</h2>
    </div>
    
</template>


<script>
  import db from '@/components/firebaseInit'
  export default {
    name: 'view-med',
    data() {
      return {
        med_id: null,
        ct_name: null,
        script_num: null,
        med_gen_name: null,
        med_brand_name: null,
        count_initial: null,
        count_timestamp: null,
        amt_on_bottle: null,
        dosage: null,
        fill_date: null,
        expiry_date: null,
        directions: null,
        house: null,
        house_mgr: null,
        dc: null,
        hold: null,
        pharm: null,
        pharm_ph: null,
        doc: null,
        price: null,
        notes: null,
        refills: null,
        total_daily_pills: null
      }
    },
    beforeRouteEnter(to, from, next) {
      db.collection('meds')
        .where('med_id', '==', to.params.med_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.med_id = doc.data().med_id
              vm.ct_name = doc.data().ct_name
              vm.script_num = doc.data().script_num
              vm.med_gen_name = doc.data().med_gen_name
              vm.med_brand_name = doc.data().med_brand_name
              vm.count_initial = doc.data().count_initial
              vm.count_timestamp = doc.data().count_timestamp
              vm.amt_on_bottle = doc.data().amt_on_bottle
              vm.dosage = doc.data().dosage
              vm.fill_date = doc.data().fill_date
              vm.expiry_date = doc.data().expiry_date
              vm.directions = doc.data().directions
              vm.house = doc.data().house
              vm.house_mgr = doc.data().house_mgr
              vm.dc = doc.data().dc
              vm.hold = doc.data().hold
              vm.pharm = doc.data().pharm
              vm.pharm_ph = doc.data().pharm_ph
              vm.doc = doc.data().doc
              vm.price = doc.data().price
              vm.notes = doc.data().notes
              vm.refills = doc.data().refills
              vm.total_daily_pills = doc.data().total_daily_pills
            })
          })
        })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        db.collection('meds').where('med_id', '==', this.$route.params.med_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.med_id = doc.data().med_id
              this.ct_name = doc.data().ct_name
              this.script_num = doc.data().script_num
              this.med_gen_name = doc.data().med_gen_name
              this.med_brand_name = doc.data().med_brand_name
              this.count_initial = doc.data().count_initial
              this.count_timestamp = doc.data().count_timestamp
              this.amt_on_bottle = doc.data().amt_on_bottle
              this.dosage = doc.data().dosage
              this.fill_date = doc.data().fill_date
              this.expiry_date = doc.data().expiry_date
              this.directions = doc.data().directions
              this.house = doc.data().house
              this.house_mgr = doc.data().house_mgr
              this.dc = doc.data().dc
              this.hold = doc.data().hold
              this.pharm = doc.data().pharm
              this.pharm_ph = doc.data().pharm_ph
              this.doc = doc.data().doc
              this.price = doc.data().price
              this.notes = doc.data().notes
              this.refills = doc.data().refills
              this.total_daily_pills = doc.data().total_daily_pills
            })
          })
      },
      deleteMed() {
        if (confirm('Are you sure?')) {
          db.collection('meds').where('med_id', '==', this.$route.params.med_id).get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
              })
            })
        }
      }
    }
  }
</script>