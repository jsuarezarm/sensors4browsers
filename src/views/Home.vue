<template>
  <div class="home">
    <!-- <DevicesList/>
    <SensorsList/> -->
    <SensorDetail/>
  </div>
</template>

<script>
// @ is an alias to /src
import DevicesList from '@/components/DevicesList.vue'
import SensorsList from '@/components/SensorsList.vue'
import SensorDetail from '@/components/SensorDetail.vue'

import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    // SignIn,
    // SignUp,
    DevicesList,
    SensorsList,
    SensorDetail
  }
}
</script>
