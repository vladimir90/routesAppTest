<template>
  <div>
    <div class="columns">
      <!--<router-link class="button is-light" to="/"><</router-link>-->
        <div class="column">
          <h3 class="subtitle">Start:</h3>
          <ul v-for="data in start">
            <li>{{data}}</li>
          </ul>
        </div>
        <div class="column">
          <h3 class="subtitle">End:</h3>
          <ul v-for="data in end">
            <li>{{data}}</li>
          </ul>
        </div>

      <hr>

      </div>
    <div class="columns">
      <div class="column">
        <p v-if="duration" class="title">Duration:{{duration.text}}</p>
        <p v-if="distance">Distance:{{distance.text}}</p>
        <a class="button is-primary"
           @click="saveRoute()"
            v-if="!loading">Save Route</a>
        <a class="button is-loading" v-else>Save Route</a>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <iframe
          v-if="distance"
          width="90%"
          height="500"
          frameborder="0" style="border:1"
          :src="mapUrl" allowfullscreen>
        </iframe>

      </div>
    </div>

  </div>
</template>

<script>

  import axios from 'axios';
  import router from '../router';
  export default {
    created(){
      this.loading = true;
      let routeData = this.$route.params.dest;
      routeData = routeData.replace('-',' ').split(' ');
      let startData = this.capitalize(routeData[0]);
      let endData = this.capitalize(routeData[1]);
      //provide apiKeys for service
      let apiKeyDistance = 'AIzaSyBt4GHOo9edsGYvGwMn4nFkq3y488jVogE';
      let apiKeyMap = 'AIzaSyDpFDeUR9ppNzXpOb26T0pmpSLytkckWRc';
      this.getDistance(startData,endData,apiKeyDistance);
      this.mapUrl = this.generateMapUrl(startData,endData,apiKeyMap);
    },
    methods:{
      updateLocalStorage(){
        let storageRoutes = JSON.parse(localStorage.getItem('savedRoutes'));
        let start = this.start[0].split(',').splice(0,1).join();
        let end = this.end[0].split(',').splice(0,1).join();
        let lastId = storageRoutes.map(item=>{
          return item.id;
        });
        lastId = lastId[lastId.length - 1];
        let id = lastId + 1;
        let newRoute = {
          id,
          start,
          end
        };
        storageRoutes.push(newRoute);
        localStorage.removeItem('savedRoutes');
        localStorage.setItem('savedRoutes',JSON.stringify(storageRoutes));
      },
      saveRoute(){
        this.updateLocalStorage();
        router.push('/');
        console.log(end);
      },
      getDistance(start,end,apiKey){
        this.config = {
          headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json'
          }
        }
        let _this = this;
        axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+start+'&destinations='+end+'&key='+apiKey,this.config)
          .then(function (response) {
              _this.start = response.data.origin_addresses;
              _this.end = response.data.destination_addresses;
              let elements = response.data.rows[0].elements[0];
              _this.distance = elements.distance;
              _this.duration = elements.duration;
               _this.loading = false;
              console.log(response);
          })
          .catch(function (error) {
            console.log(error)
          });
      },
      capitalize(string){
        return string.substring(0,1).toUpperCase() + string.substring(1).toLowerCase();
      },
      generateMapUrl(start,end,apiKey){
         let url = 'https://www.google.com/maps/embed/v1/directions?key='+apiKey+'&origin='+start+'&destination='+end+'&avoid=tolls|highways';
         return url;
      }
    },
    data () {
      return{
        loading:true,
        mapUrl:null,
        distance:null,
        duration:null,
        start: null,
        end: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
