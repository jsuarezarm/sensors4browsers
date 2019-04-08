<template>
  <div class="home">
    <!-- <DevicesList/>
    <SensorsList/> -->
    <SensorDetail/>
  </div>
</template>

<script>
// @ is an alias to /src
// import DevicesList from '@/components/DevicesList.vue'
// import SensorsList from '@/components/SensorsList.vue'
import SensorDetail from '@/components/SensorDetail.vue'

export default {
  name: 'home',
  components: {
    // DevicesList,
    // SensorsList,
    SensorDetail
  }
}
</script>
