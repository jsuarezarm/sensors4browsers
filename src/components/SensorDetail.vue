<template>
    <div id="sensor-detail">
        <h1>Sensor</h1>
        <p id="name">{{name}}</p>
        <p id="val">{{value}} {{data_type}}</p>
        <p>{{time}}</p>
        <p>{{date}}</p>
        <p>{{location}}</p>
        <p id="last_vals_title">Last Values</p>
        <p id="last_vals">{{last_values}}</p>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'SensorDetail',
    data() {
        return {
            data_type: '',
            date: '',
            time: '',
            name: '',
            value: '',
            location: '',
            last_values: ''
        }
    },
    created() {
        const db = firebase.database()
        let sensorRef = db.ref('zyopzooBojfNpYaHIfPH8o2Gm9h1/devices/dev0001/sensors/s01')

        sensorRef.on('value', (snapshot) => {
            let s = snapshot.val();
            this.data_type = s.data_type
            // this.time = timestampToDate(s.date)
            // this.date = getDate(s.date)

            var date = new Date(s.date * 1000);
            this.time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
            this.date = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()

            this.name = s.name
            this.value = s.value
            this.location = s.location.lat + "; " + s.location.lng
            this.last_values = s.last_values
        })
    }
}
</script>
<style lang="scss">
    #sensor-detail {
        width: 300px;
        height: 500px;
        // border: solid 1px;
        // border-radius: 5px;
        display: inline-block;

        #name {
            font-size: 1.5em;
        }

        #val {
            font-size: 2.5em;
        }

        #last_vals_title {
            margin-top: 2em;
            font-size: 1.2em;
        }

        #last_vals {
            padding-right: 2em;
            padding-left: 2em;
        }
    }
</style>
