<template>
  <table class="table is-fullwidth">
    <thead>
       <th><abbr>ID</abbr></th>
      <th><abbr>Route Detail</abbr></th>
      <th><abbr>Time</abbr></th>
       <th><abbr>Distance</abbr> <select v-model="unit">
         <option value="mil">Miles</option>
         <option value="km">Kilometers</option>
       </select></th>
    </thead>
    <tbody v-for="route in storedRoutes">
      <tr>
        <td>{{route.id}}</td>
        <td>{{route.start}} - {{route.end}}</td>
        <td>{{route.duration}}</td>
        <td v-show="unit === 'mil'">
          {{route.distance}}
        </td>
        <td v-show="unit === 'km'">
          {{convertToKm(route.distance)}}
        </td>

        <td>
          <a @click="details(route.start,route.end)" class="button is-small is-primary">Details</a>
          <a class="button is-small" @click="remove(route.id)">Delete</a>
        </td>

      </tr>
    </tbody>
    <a class="button is-small is-danger" @click="removeFromStorage()">ClearHistory</a>
  </table>
</template>

<script>
  import router from '../../router';
  export default {
    props:['routeData'],
    data () {
      return{
        unit:'mil',
        storedRoutes:null
      }
    },
    mounted(){
          this.storedRoutes = this.routeData;
    },
    methods:{
      details(start,end){
        router.push('details/' + start + "-" + end);
      },
      convertToKm(distance){
          let clearDistance = distance.split(" ");
          let miles = Number(clearDistance[0]);
          let km = Math.round(miles * 1.609344);
          let value = km.toString() + " km";
          return value;
      },
      remove(id){
        if(this.storedRoutes.length === 1){
          this.storedRoutes = null;
        }
        if(this.storedRoutes){
          this.storedRoutes.splice(id - 1,1);
        }
      },
      removeFromStorage(){
        this.storedRoutes = null;
        localStorage.removeItem('savedRoutes');
      }
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
