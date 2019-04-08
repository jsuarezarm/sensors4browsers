<template>
  <div id="sensors-list">
    <h1>Sensores</h1>
    <SensorItem v-for="(s,i) in sensors" :key="i"/>
    <!-- <SensorItem /> -->
  </div>
</template>
<script>
import firebase from 'firebase'
import SensorItem from '@/components/SensorItem.vue'

export default {
  name: 'SensorsList',
  components: {
    SensorItem
  },
  data () {
    return {
      sensors: null
    }
  },
  created () {
    const db = firebase.database()
    let sensorsRef = db.ref('zyopzooBojfNpYaHIfPH8o2Gm9h1/devices/dev0001/sensors')

    sensorsRef.on('value', (snapshot) => {
      this.sensors = snapshot.val()
    })
  }
}
</script>
<style lang="scss">
  #sensors-list {
    width: 300px;
    height: 500px;
    border: solid 1px;
    border-radius: 5px;
    display: inline-block;
    overflow-y: scroll;
  }
</style>
