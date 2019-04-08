<template>
  <div id="devices-list">
    <h1>Dispositivos</h1>
    <DeviceItem v-for="(d,i) in devices" :key="i"/>
  </div>
</template>
<script>
import firebase from 'firebase'
import DeviceItem from '@/components/DeviceItem.vue'

export default {
  name: 'DevicesList',
  components: {
    DeviceItem
  },
  data () {
    return {
      devices: null
    }
  },
  created () {
    const db = firebase.database()
    let devicesRef = db.ref('zyopzooBojfNpYaHIfPH8o2Gm9h1/devices')

    devicesRef.on('value', (snapshot) => {
      this.devices = snapshot.val()
    })
  }
}
</script>
<style lang="scss">
  #devices-list {
    width: 300px;
    height: 500px;
    border: solid 1px;
    border-radius: 5px;
    display: inline-block;
    overflow-y: scroll;
  }
</style>
